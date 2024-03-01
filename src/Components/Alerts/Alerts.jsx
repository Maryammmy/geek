import React, { useEffect, useRef, useState } from 'react'
import Filter from '../Filter/Fliter'
import './Alerts.css'
import alert from '../../Assets/images/Group 102.svg'
import group from '../../Assets/images/Groupg.svg'
import group2 from '../../Assets/images/Vector(4)4.svg'
import group3 from '../../Assets/images/Vector(5)5.svg'
import group4 from '../../Assets/images/Group 63.svg'
import Navbar from '../Navbar/Navbar'
export default function Alerts() {
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  const [divBackgroundColor, setDivBackgroundColor] = useState('');
  const [boldFont, setBoldFont] = useState(false);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('');
  const navbarRef = useRef();

  const handleDivClick = () => {
    setShowAdditionalDiv((prevState) => {
      const newBackgroundColor = prevState ? '' : 'dodgerblue';
      setDivBackgroundColor(newBackgroundColor);
      setBoldFont(!prevState);
      return !prevState;
    });
  };
  
  useEffect(() => {
    const bodyClickHandler = (e) => {
      console.log('Body clicked in Alerts!');
      const navbar = navbarRef.current;
      if (navbar && !navbar.contains(e.target)) {
        setNavbarBackgroundColor('red');
      }
    };

    document.body.addEventListener('click', bodyClickHandler);

    return () => {
      document.body.removeEventListener('click', bodyClickHandler);
    };
  }, [navbarBackgroundColor]);
  return (
    <div className={`wi m-auto d-flex ${navbarBackgroundColor && 'body-bg'}`}>
      <div><Navbar ref={navbarRef}/></div>
        <div className="container-fluid">
            <div className="row justify-content-end">
            <div className="col-md-8 text-white m-auto ">
              <div className='d-flex my-4 justify-content-around'>
            <h2 className='sty'>ALERTS</h2>
            <div className='d-flex justify-content-between input px-3 pt-1 '>
              <p>Search By...</p>
              <p><i className="fa-solid fa-magnifying-glass glass"></i></p>
            </div>
 
<div className=" position-relative pt-1" >
<i className="fa-solid fa-bell bell"></i>
      <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill py-1 px-2">
        6
      <span className="visually-hidden">unread messages</span>  </span>
     </div>

            </div>
            <div className='aft'>
            <div className="row  m-auto width  my-3 rounded-2">
              <div className="col-md-3 d-flex justify-content-evenly  border-end border-secondary">
                <img src={group} alt="" width={30} />
                <span>AMZN</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt=""  width={25}/>
                <span className='cor-red'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>Low Risk</span>
              </div>
            </div>
            <div className='row m-auto width rounded-2'  onClick={handleDivClick} style={{ cursor: 'pointer', backgroundColor: divBackgroundColor , fontWeight: boldFont ? '700' : '', }}>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>TSLA</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3  border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-green'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt=""  width={35}/>
                <span>High Risk</span>
              </div>
            </div>
            {showAdditionalDiv && (<div className="row m-auto widthh rounded-2"  style={{
              opacity: showAdditionalDiv ? 1 : 0,
              transition: 'all 0,3s ease', 
            }}>
              <span><p><span className='fw-bolder'>$TSLA </span>just announced an acquisition of <span className='fw-bolder'>$NFLX</span> at <span className='fw-bolder'>$200 B.</span></p>
              This is an <a href="#">arbitrage opportunity</a> , with the max gain being %X if the deal closes, but the possible risk is % Y if the deal fails,If the deal success is% and therefore the recommend play is <a href="#">long/short</a> SABC</span>
          </div>
        )}
            <div className="row  m-auto width my-3 rounded-2">
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>ABQQ</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt=""  width={25}/>
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-green'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>High Risk</span>
              </div>
            </div>
            <div className="row  m-auto width my-3 rounded-2">
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>MSFT</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-red'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>Low Risk</span>
              </div>
            </div>
            <div className="row  m-auto width my-3 rounded-2">
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>PYPL</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-green'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>Low Risk</span>
              </div>
            </div>
            <div className="row  m-auto width  my-3 rounded-2">
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>NFLX</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-red'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>Low Risk</span>
              </div>
            </div>
            <div className="row  m-auto width  my-3 rounded-2">
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>NFLX</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-red'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>Low Risk</span>
              </div>
            </div>
            <div className="row  m-auto width my-3 rounded-2">
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>NFLX</span>
              </div>
              <div className="col-md-3 border-end border-secondary d d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-red'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>Low Risk</span>
              </div>
            </div>
            <div className="row  m-auto width my-3 rounded-2">
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>NFLX</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-red'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>Low Risk</span>
              </div>
            </div>
            <div className="row  m-auto width  my-3 rounded-2">
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group} alt="" width={30} />
                <span>NFLX</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group2} alt="" width={25} />
                <span>200</span>
              </div>
              <div className="col-md-3 border-end border-secondary d-flex justify-content-evenly">
                <img src={group3} alt="" width={25} />
                <span className='cor-red'>-0.25 %</span>
              </div>
              <div className="col-md-3  d-flex justify-content-evenly">
                <img src={group4} alt="" width={35} />
                <span>Low Risk</span>
              </div>
            </div>
            </div>
            </div>
            <div className={`col-md-3 text-white my-4 contain rounded-3 ${navbarBackgroundColor && 'navbar-bg'}`}>
                  <Filter/>
                </div>
            
             
            </div>
        </div>
    </div>
  )
}
