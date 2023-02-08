import React from 'react';
import styled from 'styled-components';

import ProgressBar from './ProgressBar';

const Article = styled.article`
  width: 300px;
  height: 300px;
  border: 1px black solid;

  .character-name {
    font-size: 30px;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 142px;
  }

  @media only screen and (min-width: 1440px) {}
`;

const CharacterCard: React.FC = () => {
  const votes = {
    positive: 100,
    negative: 80,
  };

  // TODO: Fix this
  const aux: any = {};

  return (
    <Article>
      <h1 className="character-name">Article</h1>
      <ProgressBar {...{votes, ...aux}} />
    </Article>
  );
};

export default CharacterCard;
