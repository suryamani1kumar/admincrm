import { useState } from 'react';
import { BiExport } from "react-icons/bi";
import { TbLogout, TbLogout2 } from "react-icons/tb";
import { LuLayoutDashboard, LuLayoutGrid } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";
import {
  MdArrowForwardIos,
  MdKeyboardArrowRight,
  MdOutlineArrowForwardIos,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const SiderNav = () => {
  // const [isOpen, setIsOpen] = useState(true);
  // const [activeSubMenu, setActiveSubMenu] = useState(null);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  // const handleMenuClick = (index) => {
  //   setActiveSubMenu((prevActive) => (prevActive === index ? null : index));
  // };
  // const menuBtnClass = isOpen ? 'bx-menu-alt-right' : 'bx-menu';

   const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };
  return (
    <div>
      {/* https://codepen.io/neeraj_1/pen/mdgXdxb */}
      {/* https://codepen.io/kalvincalimag/pen/mdYbKoy */}
{/*       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-details">
          <GiHamburgerMenu className="logo iconcontainersidebar" />
          <div className="logo_name">Triploom</div>
          <GiHamburgerMenu
            onClick={toggleSidebar}
            className={`siderbartoggle iconcontainersidebar ${menuBtnClass}`}
          />
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">
              <LuLayoutGrid className="iconcontainersidebar" />
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#">
              <FaRegUser className="iconcontainersidebar" />
              <span className="links_name">User</span>
              {/* <IoChevronDownSharp className="iconcontainersidebar" /> 
               <ul className="sub-menu">
                <li>
                  <a href="#">
                    <span className="text">Earnings</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="text">Funds</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="text">Declines</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="text">Payouts</span>
                  </a>
                </li>
              </ul> */}
            </a>

            <span className="tooltip">User</span>
          </li>

          <li className="profile">
            <div className="profile-details">
              <BiExport className="iconcontainersidebar" />
              <div className="name_job">
                <div className="name">Logout</div>
              </div>
            </div>
            <TbLogout2 className="iconcontainersidebar" />
          </li>
        </ul>
      </div> */}
     <div className={`sidebar ${isSidebarActive ? "active" : ""}`}>
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

        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul>
              <li
                className={activeMenu === 0 ? "active" : ""}
                onClick={() => handleMenuClick(0)}
              >
                <a href="#">
                  <LuLayoutDashboard />
                  <span className="text">Dashboard</span>
                </a>
              </li>
              <li
                className={activeMenu === 1 ? "active" : ""}
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
                  <ul className="sub-menu" style={{ display: "block" }}>
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
            </ul>
          </div>

          <div className="menu">
            <ul>
              <li>
                <a href="#">
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
