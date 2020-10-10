import styled from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  fontSize,
  margin,
  padding,
  colors: { black, white },
} = defaultStylesValues;

export const ActionButton = styled.button`
  margin: ${margin}px 0;
  padding: ${padding}px ${padding * 2}px;
  border: 2px solid ${black};
  border-radius: 20px;
  font-family: 'Lato';
  font-weight: bold;
  background-color: transparent;
  color: ${black};
  transition: 0.3s background-color linear, 0.3s color linear;
  cursor: pointer;

  &:hover {
    background-color: ${black};
    color: ${white};
  }
`;
