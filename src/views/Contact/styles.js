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
    flex-direction: column;
    padding: 0 0 20px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: min(90%, 500px);

  h1 {
    color: ${(props) => props.theme.highlight};
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  p {
    margin: 8px;
    font-size: 14px;
  }

  .input-wrapper {
    position: relative;
    padding: 15px 0 0;
    margin: 10px 0 30px;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme.secondary};
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${(props) => props.theme.highlight};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.highlight}
    );
    border-image-slice: 1;
  }
  /* reset input */
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  button {
    border: 2px solid ${(props) => props.theme.highlight};
    border-radius: 3px;

    margin-top: 30px;
    padding: 8px 24px;
    background: transparent;
    color: ${(props) => props.theme.highlight};
    font-size: 20px;

    align-self: center;
  }
`;
