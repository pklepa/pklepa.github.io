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
    padding: 10px 0 30px;

    .bio {
      max-width: 500px;

      h1 {
        font-size: 24px;
        font-family: "Big Shoulders Stencil Display", monospace;
        color: ${(props) => props.theme.highlight};
        text-align: center;

        margin-bottom: 12px;
      }

      p {
        text-align: left;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;

      .bio {
        order: 2;
      }
    }

    @media (max-width: 550px) {
      .bio {
        max-width: 300px;
      }
    }
  }

  .bottom {
    position: relative;
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

  .e-mail {
    color: ${(props) => props.theme.highlight};
    font-size: 18px;
    font-family: monospace;
    text-decoration: none;
    background-color: ${(props) => props.theme.primary};
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.highlight};
    padding: 8px 12px;
    margin: 12px;
  }

  span {
    opacity: 0.5;
    margin: 20px 0;
  }
`;

export const ProfilePic = styled.img`
  width: 200px;
  margin-left: 50px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 40px;
  }

  @media (max-width: 550px) {
    width: 150px;
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
