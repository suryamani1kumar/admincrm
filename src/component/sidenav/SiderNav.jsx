import { useState } from 'react';
import { TbLogout } from 'react-icons/tb';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import {
  MdOutlineArrowForwardIos,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const SiderNav = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };
  console.log('activeMenu', activeMenu);

  return (
    <div>
      {/* https://codepen.io/neeraj_1/pen/mdgXdxb */}
      {/* https://codepen.io/kalvincalimag/pen/mdYbKoy */}

      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
        <div className="menu-btn" onClick={toggleSidebar}>
          {isSidebarActive ? <MdOutlineArrowForwardIos /> : <IoMdClose />}
        </div>

        <div className="head">
          <div className="user-img">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUzMjAyMTh8&ixlib=rb-4.0.3&q=85"
              alt="User"
            />
          </div>
          <div className="user-details">
            <p className="title">web developer</p>
            <p className="name">Kalvin Calimag</p>
          </div>
        </div>

        <div className="nav navmenu">
          <div className="menu">
            <ul>
              <li>
                <Link to="/dashboard">
                  <LuLayoutDashboard />
                  <span className="text">Dashboard</span>
                </Link>
              </li>
              <li
                className={activeMenu === 1 ? 'active' : ''}
                onClick={() => handleMenuClick(1)}
              >
                <a href="#">
                  <FaRegUser />
                  <span className="text">Users</span>
                  <span className="arrow">
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </a>
                {activeMenu === 1 && (
                  <ul className="sub-menu" style={{ display: 'block' }}>
                    <li>
                      <a href="#">
                        <span className="text">Add Users</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="text">View User</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/addblog">
                  <LuLayoutDashboard />
                  <span className="text">Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="menu">
            <ul>
              <li>
                <a href="/">
                  <TbLogout />
                  <span className="text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderNav;
