const colors = {
  positive: '#3cbbb4',
  positiveOpacity: (opacity = 1): string => `rgba(60, 187, 180, ${opacity})`,
  negative: '#fbbd4a',
  negativeOpacity: (opacity = 1): string => `rgba(249, 173, 29, ${opacity})`,
};

const progressBarSizes = {
  SMALL: '36px',
  LARGE: '54px',
};

export { colors, progressBarSizes };
