import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  span {
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 20px;

    a {
      color: ${(props) => props.theme.highlight};
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;

  a {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }

  svg {
    width: 45px;
    color: ${(props) => props.theme.secondary};
    transition: 400ms;

    &:hover {
      color: ${(props) => props.theme.highlight};
    }
  }
`;
