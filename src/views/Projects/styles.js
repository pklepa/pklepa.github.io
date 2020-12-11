import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  overflow: hidden;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80px;
  }

  .middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 30px 0 50px;
  }

  .bottom {
    position: relative;
    min-height: 65px;
    border-top: 2px solid #333;

    &::after {
      position: absolute;
      top: -14px;

      content: "get social";
      background-color: ${(props) => props.theme.primary};
      padding: 4px 6px;
      color: ${(props) => props.theme.secondary};
      font-size: 14px;
    }

    @media (max-width: 550px) {
      min-height: 60px;
    }
  }

  p {
    text-align: center;
    line-height: 1.5em;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }

  svg {
    width: 32px;
    color: ${(props) => props.theme.secondary};
    transition: 400ms;

    &:hover {
      color: ${(props) => props.theme.highlight};
    }
  }
`;

export const ProjectContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 40px 40px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    flex-direction: column;
    max-width: 600px;
  }
`;

export const ProjectImage = styled.img`
  max-height: 280px;
  max-width: 500px;
  border-radius: 5px;
  margin-right: 16px;

  @media (max-width: 1000px) {
    margin: 0 0 16px;
  }

  @media (max-width: 600px) {
    max-width: 330px;
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  align-self: flex-start;
  max-width: 400px;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.highlight};
    font-size: 22px;
  }

  p {
    text-align: left;
  }

  .buttons-wrapper {
    display: flex;
    align-self: center;
    margin-top: 20px;

    & > a:not(:first-child) {
      margin-left: 12px;
    }
  }

  @media (max-width: 1000px) {
    max-width: 500px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const Button = styled.a`
  border: 2px solid ${(props) => props.theme.highlight};
  border-radius: 3px;

  background-color: ${(props) => (props.primary ? "#f8efd4" : "#222")};
  color: ${(props) => (props.primary ? "#222" : "#f8efd4")};

  font-size: 16px;
  font-weight: ${(props) => (props.primary ? "bold" : "normal")};
  text-decoration: none;
  padding: 6px 10px;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.1);
  }
`;
