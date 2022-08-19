import React, { Component } from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 63px 100px 39px 100px;
`;

const Logo = styled.h4`
  color: #203239;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  flex-direct: row;
  gap: 8px;
`;
const NavListItem = styled.div`
  list-style: none;
`;

const NavListItemButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #ff7527;
    transform: scale(1.1);
  }
`;

class NavBar extends Component {
  render() {
    return (
      <NavBarContainer>
        <Logo>Zimba</Logo>
        <NavList>
          <NavListItem>
            <NavListItemButton>Home</NavListItemButton>
          </NavListItem>
          <NavListItem>
            <NavListItemButton>About</NavListItemButton>
          </NavListItem>
          <NavListItem>
            <NavListItemButton>Properties</NavListItemButton>
          </NavListItem>
          <NavListItem>
            <NavListItemButton>Contact</NavListItemButton>
          </NavListItem>
        </NavList>
      </NavBarContainer>
    );
  }
}

export default NavBar;
