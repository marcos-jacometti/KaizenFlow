import styled from "styled-components";
import { activeMediaStyles, subMenuContainerMediaStyles } from "./responsive";

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 0.85vw;
  ${subMenuContainerMediaStyles};

 .link {
    text-decoration: none;
    height: 5vh;
    padding: 1vh;
    color: inherit;
  }

 .link.active {
    color: #8906E6;
    ${activeMediaStyles};
  }
`;