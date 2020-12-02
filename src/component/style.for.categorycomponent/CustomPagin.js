import styled from "styled-components";

export default styled.div`
  cursor: pointer;
  transition: all 250ms ease-in;
  background-color: ${({ active }) => (active ? "#6A6C6E" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "333")};
  transform: scale(${({ active }) => (!active ? 1.1 : 1)});
  box-shadow: 0 0 2px 0px #555;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0px;
  height: 0px;
  margin: 10px 10px;
`;