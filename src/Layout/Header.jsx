import React,{useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import SearchBox from '../component/SearchBox';
import Avatar from '../component/Avatar';
import UserMenu, { PopperUserMenu } from './component/UserMenu';
import { icon } from '../assert/icon/icon';
import jwt_decode from 'jwt-decode';
import AuthContext from '~/Context/Auth.context';

const HeaderLayout = (props) => {

  const [popperMenu, setPopperMenu] = useState(false)
  const [avatarLabel, setAvatarLabel] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      const decodedToken = jwt_decode(token);

      setAvatarLabel(decodedToken.username[0])
    }
  }, []);

  const togglePopper = () => {
    setPopperMenu(!popperMenu)
  }

  return (
      <Header>
        <SearchBoxWrapper>
          <SearchBox />
        </SearchBoxWrapper>

        <ActionWrapper>
          <icon.notification />
          <icon.message />

        </ActionWrapper>
        <AvatarWrapper > 
          <Avatar onClick={togglePopper} label={avatarLabel}/>
         {popperMenu && <UserMenu togglePopper={togglePopper}/>}
        </AvatarWrapper>
      </Header>
  );
};

export default HeaderLayout;


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: var(--header-height);
    width: 100vw;
    position: relative;
    z-index: 99;
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