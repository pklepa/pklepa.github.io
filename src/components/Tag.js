import styled from "styled-components";

export const Tag = styled.div`
  display: flex;
  background-color: #444;
  border-radius: 8px;
  color: ${(props) => props.theme.highlight};
  font-family: monospace;
  align-items: center;
  padding: 3px 6px;
  margin-right: 6px;

  span {
    color: ${(props) => props.theme.highlight};
    font-size: 12px;
    margin: 0;
    margin-left: 6px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
