import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbsUp from '../../assets/img/ThumbsUp';
import ThumbsDown from '../../assets/img/ThumbsDown';

interface Votes {
  positive: number;
  negative: number;
}

interface StyleProps {
  positivePercentage: string;
  negativePercentage: string;
}

interface Props {
  votes: Votes;
}

const StyledProgressBar = styled.div`
  width: 100%;
  height: 36px;
  display: grid;
  grid-template-columns: ${(p: StyleProps) => p.positivePercentage} ${(p: StyleProps) => p.negativePercentage};
  color: white;

  .votes {
    height: 100%;
    transition: width 500ms ease;

    &--positive {
      background-color: rgba(60, 187, 180, 0.6);
    }
    &--negative {
      background-color: rgba(249, 173, 29, 0.6);
    }

    &-percentage {
      display: flex;
      align-items: center;
      height: inherit;
      margin: 0 12px;

      & p {
        font-size: 18px;
        margin: 0 12px;
      }

      &--negative {
        justify-content: flex-end;
      }
    }
  }
`;

const ProgressBar: React.FC = ({ votes }: Props) => {
  const [positivePercentage, setPositivePercentage] = useState<string>('50%');
  const [negativePercentage, setNegativePercentage] = useState<string>('50%');

  useEffect(() => {
    const [positive, negative] = calculatePercentages(votes);
    setPositivePercentage(positive);
    setNegativePercentage(negative);
  }, [votes]);

  const calculatePercentages = (votes: Votes): [string, string] => {
    const { positive, negative } = votes;
    const totalVotes = positive + negative;
    const positivePerc = `${((positive / totalVotes) * 100).toFixed(1)}%`;
    const negativePerc = `${((negative / totalVotes) * 100).toFixed(1)}%`;
    return [positivePerc, negativePerc];
  };

  return (
    <StyledProgressBar {...{ positivePercentage, negativePercentage }}>
      <div className="votes votes--positive">
        <span className="votes-percentage votes-percentage--positive">
          <ThumbsUp />
          <p>{positivePercentage}</p>
        </span>
      </div>
      <div className="votes votes--negative">
        <span className="votes-percentage votes-percentage--negative">
          <p>{negativePercentage}</p>
          <ThumbsDown />
        </span>
      </div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
