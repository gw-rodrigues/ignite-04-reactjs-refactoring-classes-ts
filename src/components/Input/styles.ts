import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;
  /* Fix issus ThemedCssFunction not working, border not defined */
  border:1px solid #fff;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #b7b7cc;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  ${props => props.isFocused && css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props => props.isFilled && css`
      /* Fix issus ThemedCssFunction not working, Input not defined */
      color: #ff9000;
      input { color: #ff9000; }
    `}

  svg {
    margin-right: 16px;
  }
`;
