import { useState } from 'react';
import { TbLogout } from 'react-icons/tb';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import {
  MdOutlineArrowForwardIos,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { axiosInstance } from '../../utils/axiosInstance';

const SiderNav = ({
  setIsAuthenticated,
  isSidebarActive,
  setIsSidebarActive,
}) => {
  let navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };
  const logout = () => {
    axiosInstance
      .post('/api/logout')
      .then((res) => {
        console.log('res', res);
        navigate('/');
        setIsAuthenticated(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* https://codepen.io/neeraj_1/pen/mdgXdxb */}
      {/* https://codepen.io/kalvincalimag/pen/mdYbKoy */}

      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
        <div className="menu-btn" onClick={toggleSidebar}>
          {isSidebarActive ? <MdOutlineArrowForwardIos /> : <IoMdClose />}
        </div>

        <div className="head">
          <div className="user-icon">
            <FaRegUserCircle />
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
                <span onClick={logout}>
                  <TbLogout />
                  <span className="text">Logout</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderNav;
