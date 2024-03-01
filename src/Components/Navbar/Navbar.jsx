import React, { forwardRef } from 'react';
import './Navbar.css';
import logo from '../../Assets/images/street suite logo-04 1.svg';
import icon3 from '../../Assets/images/Group 98.svg';
import icon4 from '../../Assets/images/Group 99.svg';
import icon5 from '../../Assets/images/Group(111).svg';
import person from '../../Assets/images/—ÎÓÈ 1.svg';

const Navbar = forwardRef((props, ref) => {
  return (
    <nav className='sidebar navbar-container'>
      <div className='d-flex justify-content-between  flex-column h-100'>
        <div>
          <div className='logo-menu'>
            <h2 className='px-2 pt-4'><img src={logo} alt="" /></h2>
          </div>
          <ul className='list pt-4'>
            <li className='list-item'>
              <a href="#">
                <i className="fa-solid fa-bell"></i>
                <span className='link-name ps-2'>Alerts</span>
              </a>
            </li>
            <li className='list-item'>
              <a href="#">
                <i className="fa-solid fa-graduation-cap"></i>
                <span className='link-name ps-2'>Training</span>
              </a>
            </li>
            <li className='list-item lista'>
              <a href="#">
                <img src={icon5} alt="" />
                <span className='link-name cor-gray ps-2'>Automation</span>
              </a>
            </li>
            <li className='list-item lista'>
              <a href="#">
                <img src={icon4} alt="" />
                <span className='link-name cor-gray ps-2'>Portfolio</span>
              </a>
            </li>
            <li className='list-item lista'>
              <a href="#">
                <img src={icon3} alt="" />
                <span className='link-name cor-gray ps-2'>Trading</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='mb-3 m-auto person d-flex'>
          <div><img src={person} alt="" /></div>
          <div>
            <p className='pb-0 mb-2'>Moni Roy</p>
            <p className='cor-gray mt-0 pt-0'>Beginner</p>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;


