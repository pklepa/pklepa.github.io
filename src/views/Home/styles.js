import styled from "styled-components";

export const Container = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    margin-top: 16px;

    a {
      color: ${(props) => props.theme.highlight};
    }
  }
`;

export const Logo = styled.h1`
  font-family: "Big Shoulders Stencil Display", cursive;
  font-size: 50px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  padding: 10px 10px 14px;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 3px;

  transition: 1s;
  cursor: default;

  &:hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
  }
`;
