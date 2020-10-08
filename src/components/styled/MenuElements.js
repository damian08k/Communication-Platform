import styled, { css } from 'styled-components';

import { defaultStylesValues } from '../../js/constants';
const {
  fontSize,
  margin,
  padding,
  breakpoints: { mobileLarge },
  colors: { black },
} = defaultStylesValues;

export const List = styled.ul`
  transform: ${({ clicked }) => (clicked ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: 50% 0;
  transition-duration: 0.3s;
  list-style-type: none;

  .list-element-container {
    width: 100%;

    &:first-child {
      border-top: 2px solid ${black};
    }
  }

  .list-element {
    display: block;
    width: 100%;
    padding: ${padding * 2}px;
    font-size: ${fontSize}rem;
    border-bottom: 2px solid ${black};
    background-color: white;
    color: ${black};
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }

  @media ${mobileLarge} {
    display: flex;
    justify-content: flex-end;
    transform: scaleY(1);
    transform-origin: 0;
    transition-duration: 0;

    .list-element-container {
      width: auto;

      &:first-child {
        border-top: none;
      }
    }

    .list-element {
      border-bottom: none;
      padding: 0 10px;

      &:hover {
      }

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: transparent;
        transition: width 0.3s linear, background-color 0.3s linear;
      }

      &:hover::after {
        width: 100%;
        background-color: black;
      }
    }
  }
`;

export const Hamburger = styled.button`
  position: relative;
  width: 4rem;
  height: 3.5rem;
  margin: ${margin}px ${margin * 2}px ${margin}px auto;
  border: none;
  border-top: 5px solid ${black};
  background-color: transparent;
  transition: 0.2s transform linear;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    transform: translateY(10px);
    border-top: 5px solid ${black};
  }

  &::after {
    transform: translateY(25px);
    transition: 0.2s transform linear;
  }

  ${props =>
    props.isClicked &&
    css`
        border-top: none;
        transform: rotate(45deg);

        &::after {
          transform: rotate(90deg) translateX(10px);
        }
      }
    `};

  .hamburger-info {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  @media ${mobileLarge} {
    display: none;
  }
`;
