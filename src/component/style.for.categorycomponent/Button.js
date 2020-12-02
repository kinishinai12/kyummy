import styled from "styled-components";
export default styled.button`
  background: none;
  border: transparent;
  font-size: 1.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:disabled {
    cursor: not-allowed;
  }
`;