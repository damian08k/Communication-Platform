import styled from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const { fontSize, padding } = defaultStylesValues;

export const SingleIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-button {
    display: block;
    width: 4rem;
    height: 4rem;
    cursor: pointer;

    &:focus {
      outline: solid;
    }
  }

  .icon-img {
    width: 100%;
    height: 100%;
  }

  .icon-name {
    padding-top: ${padding / 2}px;
    text-align: center;
    font-size: 1.4rem;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  font-size: ${fontSize}rem;

  .copy-ico {
    width: 1.5rem;
    height: 1.5rem;
  }

  .page-author {
    padding-left: ${padding}px;
  }
`;
