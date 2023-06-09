const { merge } = require('webpack-merge');

const applyPresets = env => {
  const { presets = [] } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName => require(`./webpack.${presetName}`)(env));

  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;
