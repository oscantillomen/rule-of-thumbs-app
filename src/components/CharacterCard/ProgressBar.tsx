import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbsUp from '../../assets/img/ThumbsUp';
import ThumbsDown from '../../assets/img/ThumbsDown';

import { colors, progressBarSizes } from '../../styles/constants';

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
  className?: string;
}

const StyledProgressBar = styled.div`
  align-self: flex-end;
  width: 100%;
  height: ${progressBarSizes.SMALL};
  display: grid;
  grid-template-columns: ${(p: StyleProps) => p.positivePercentage} ${(p: StyleProps) => p.negativePercentage};
  color: white;

  .votes {
    height: 100%;
    transition: width 500ms ease;

    &--positive {
      background-color: ${colors.positiveOpacity(0.6)};
    }
    &--negative {
      background-color: ${colors.negativeOpacity(0.6)};
    }

    &__percentage {
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

  @media only screen and (min-width: 1440px) {
    height: ${progressBarSizes.LARGE};
  }
`;

const ProgressBar: FC<Props> = ({ votes }) => {
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
        <span className="votes__percentage votes__percentage--positive">
          <ThumbsUp />
          <p>{positivePercentage}</p>
        </span>
      </div>
      <div className="votes votes--negative">
        <span className="votes__percentage votes__percentage--negative">
          <p>{negativePercentage}</p>
          <ThumbsDown />
        </span>
      </div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
