import React from 'react';
import styled from 'styled-components';
import SearchBox from '../component/SearchBox';
import Avatar from '../component/Avatar';
import { icon } from '../assert/icon/icon';

const HeaderLayout = (props) => {
  const { children } = props;

  return (
    <Container>
      <Header>
        <SearchBoxWrapper>
          <SearchBox />
        </SearchBoxWrapper>

        <ActionWrapper>
          <icon.notification />
          <icon.message />

        </ActionWrapper>

        <AvatarWrapper>
          
          <PopperUserMenu>
            <div>test</div>
          </PopperUserMenu>

          <Avatar />
        </AvatarWrapper>
      </Header>
      {children}
    </Container>
  );
};

export default HeaderLayout;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  justify-content: center;
  margin-left : 10rem;
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin-right: 20px;
  svg {
    cursor: pointer;
    &:nth-child(1), &:nth-child(2) {
      
    }

    &:nth-child(1) {
      font-size: 30px;
    } 
    
    &:nth-child(2) {
      font-size: 28px;
    }

  }
`

const PopperUserMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 200px;
  height: 200px;
  background-color: #545454;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 99;

`