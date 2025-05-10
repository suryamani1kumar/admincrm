import React from 'react';
import './Header.scss';
import { FaBars } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <FaBars className="topbar__icon" />
        <div className="topbar__search">
          <input type="text" placeholder="Search..." />
          <FiSearch className="search-icon" />
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__profile">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" />
          <span>Thomson</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
