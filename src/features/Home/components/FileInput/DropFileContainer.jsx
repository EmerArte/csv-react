import styled from "styled-components";
import { getColor } from "../../utils/DropFileUtility";

const DropFileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
  border-width: 2px;
  border-radius: 8px;
  border-color: #00b5e2;
  border-style: dashed;
  background-color: ${(props) => getColor(props)};
  color: #bdbdbd;
  outline: none;
  transition: background-color 0.24s;
`;
export default DropFileContainer;