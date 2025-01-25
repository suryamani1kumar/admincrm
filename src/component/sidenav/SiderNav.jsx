import { useState } from 'react';
import { BiExport } from 'react-icons/bi';
import { TbLogout2 } from 'react-icons/tb';
import { LuLayoutGrid } from 'react-icons/lu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa';
import { IoChevronDownSharp } from 'react-icons/io5';

const SiderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuClick = (index) => {
    setActiveSubMenu((prevActive) => (prevActive === index ? null : index));
  };
  const menuBtnClass = isOpen ? 'bx-menu-alt-right' : 'bx-menu';
  return (
    <div>
      {/* https://codepen.io/neeraj_1/pen/mdgXdxb */}
      {/* https://codepen.io/kalvincalimag/pen/mdYbKoy */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
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
      </div>
    </div>
  );
};

export default SiderNav;
