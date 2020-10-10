import React from 'react';
import './header.styles.scss';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="Numan" src="" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input
          placeholder="Search..."
          className="header__search--input"
          type="search"
        />
      </div>
      <div className="header__right">
        <HelpOutlinedIcon />
      </div>
    </div>
  );
};

export default Header;
