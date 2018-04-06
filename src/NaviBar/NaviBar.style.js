import styled from "styled-components";
import { Link } from "react-router";

export const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  right: 0;
  right: 2em;
  top: 0.25em;
`;

export const NaviItem = styled(Link)`
  margin-right: 30px;
  font-size: 1.5em;
  position: relative;
  cursor: pointer;
  color: rgba(242, 95, 92, 1);
  &:hover {
    color: rgb(253, 238, 108);
  }
  &:after {
    content: " ";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: height 0.3s;
  }
`;
