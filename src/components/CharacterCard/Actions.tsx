import { FC } from 'react';
import styled from 'styled-components';

import ThumbsDown from '../../assets/img/ThumbsDown';
import ThumbsUp from '../../assets/img/ThumbsUp';

import { colors } from '../../styles/constants';

const Wrapper = styled.div`
  margin-top: 8px;
  min-width: 203px;
  text-align: end;
  .time {
    color: white;
    margin: 0 0 12px 0;
    font-weight: bold;
    font-size: 12px;
    text-align: right;
  }

  .button {
    border: none;
    color: white;

    &__option {
      height: 30px;
      width: 30px;

      &--positive {
        margin-right: 12px;
        background: ${colors.positiveOpacity(0.8)};
      }

      &--negative {
        background: ${colors.negative};
      }

      &--active {
        border: 2px solid white;
      }
    }

    &__vote {
      border: 1px solid white;
      margin-left: 12px;
      background: rgba(0, 0, 0, 0.6);
      height: 38px;
      width: 107px;
      &:hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
      &:active {
        background: #888;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-right: 12px;
  }
`;

const Actions: FC = () => {
  return (
    <Wrapper>
      <p className="time">1 year ago in Politics</p>
      <button className="button button__option button__option--positive">{<ThumbsUp />}</button>
      <button className="button button__option button__option--negative">{<ThumbsDown />}</button>
      <button className="button button__vote">Vote Now</button>
    </Wrapper>
  );
};

export default Actions;
