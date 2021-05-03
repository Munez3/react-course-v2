import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  display: block;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  list-style: none;
`;
export const NavItem = styled.li``;

export const ScLink = styled(Link)<{ home?: boolean }>`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  font-weight: ${(props) => (props.home ? "700" : "400")};
`;
