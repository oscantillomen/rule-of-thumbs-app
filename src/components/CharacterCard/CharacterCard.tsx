import { FC } from 'react';
import styled from 'styled-components';

import ThumbsUp from '../../assets/img/ThumbsUp';
import ThumbsDown from '../../assets/img/ThumbsDown';
import Actions from './Actions';
import ProgressBar from './ProgressBar';

import { colors, progressBarSizes } from '../../styles/constants';

interface Votes {
  positive: number;
  negative: number;
}

interface Props {
  img: string;
  votes: Votes;
  name: string;
  description: string;
}

const Article = styled.article`
  background-image: url(${(p: Props) => p.img});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  flex-flow: row wrap;
  height: 300px;
  width: 300px;

  .wrapper {
    display: flex;
    height: calc(100% - ${progressBarSizes.SMALL});
    justify-content: flex-start;
    width: 100%;
  }

  .calification {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    &__icon {
      align-items: center;
      background-color: ${colors.positive};
      display: flex;
      height: 30px;
      justify-content: center;
      width: 30px;
    }
  }

  .content {
    align-self: flex-end;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 34px 12px 8px;
    width: 100%;

    &__character {
      color: white;

      &-info {
        margin-bottom: 12px;

        &__name {
          font-size: 30px;
          font-weight: 400;
          margin: 0;
        }

        &__description {
          margin-top: 12px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    background-size: contain;
    flex-flow: column wrap;
    height: 142px;
    width: 100%;

    .wrapper {
      /* background: linear-gradient(to left, #e66465 0%, #9198e5 100%); */
      background: linear-gradient(
        to right,
        rgba(136, 136, 136, 0.2) 0%,
        rgba(136, 136, 136, 0.6) 10%,
        rgba(136, 136, 136, 1) 100%
      );
      background-size: contain;
      height: calc(100% - ${progressBarSizes.SMALL});
    }

    .calification {
      align-items: flex-start;
    }

    .content {
      height: 100%;
      flex-direction: row;
      margin: 0;
      margin-left: 150px;
      &__character {
        flex-grow: 2;
        &-info {
          &__name {
            margin-top: 6 px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .wrapper {
      height: calc(100% - ${progressBarSizes.LARGE});
    }
  }
`;

const CharacterCard: FC<Props> = ({ votes, img, name, description }) => {
  const { positive, negative } = votes;

  return (
    <Article {...{ img, votes, name, description }}>
      <div className="wrapper">
        <div className="calification">
          <span className="calification__icon">{positive >= negative ? <ThumbsUp /> : <ThumbsDown />}</span>
        </div>
        <div className="content">
          <div className="content__character">
            <div className="content__character-info">
              <h1 className="content__character-info__name">{name}</h1>
              <p className="content__character-info__description">{description}</p>
            </div>
          </div>
          <Actions />
        </div>
      </div>
      <ProgressBar votes={votes} />
    </Article>
  );
};

export default CharacterCard;
