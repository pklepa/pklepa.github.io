import styled, { keyframes } from "styled-components";

export const Navbar = styled.nav`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 10px 40px;

  ul {
    a {
      color: ${(props) => props.theme.secondary};
      font-size: 20px;
      text-decoration: none;
      transition: 0.4s;

      &:not(:first-child) {
        margin-left: 16px;
      }

      &:hover {
        color: ${(props) => props.theme.highlight};
      }
    }
  }
`;

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

export const Logo = styled.div`
  position: relative;

  font-family: "Big Shoulders Stencil Display", cursive;
  font-size: 24px;
  border-radius: 3px;
  z-index: 10;

  cursor: default;

  h1 {
    color: ${(props) => props.theme.highlight};
    color: #f8efd5;
    background-color: ${(props) => props.theme.primary};
    border-radius: 3px;
    padding: 4px 8px 8px;
  }

  &:hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
  }

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    z-index: -1;
    width: calc(100% + 2px * 2);
    height: calc(100% + 2px * 2);
    background: linear-gradient(90deg, #222, #f8efd4, #222);
    background-size: 200% 200%;
    background-position: 0 -50%;
    border-radius: calc(2 * 2px);
    animation: ${moveGradient} 8s ease-in-out infinite;
  }
`;
