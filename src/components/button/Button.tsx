import styled from "@emotion/styled";

const Button = styled.div`
  display: grid;
  place-items: center;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme: { background } }): string => background};
  color: ${({ theme: { color } }): string => color};
  cursor: pointer;
  border: 1px solid ${({ theme: { color } }): string => color};
  transition: scale 200ms, border 200ms, background-color 200ms, color 200ms;
  &:hover {
    border: 1px solid ${({ theme: { color } }): string => color};
    background: ${({ theme: { color } }): string => color};
    color: ${({ theme: { background } }): string => background};
  }
  &:active {
    scale: 0.99;
  }
`;

export default Button;
