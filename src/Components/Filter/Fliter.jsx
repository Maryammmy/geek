import React, { useState } from 'react';
import './Filter.css';
import img1 from '../../Assets/images/Group 56.svg';
import img2 from '../../Assets/images/Vector.svg';
import img3 from '../../Assets/images/Vector(1).svg';
import img4 from '../../Assets/images/Vector(3).svg';
import img5 from '../../Assets/images/Group 58.svg';
import img6 from '../../Assets/images/Vector(4).svg';
import img7 from '../../Assets/images/Page-1.svg';
import img8 from '../../Assets/images/XMLID_931_.svg';
import img9 from '../../Assets/images/Group.svg';
import img10 from '../../Assets/images/Group 57.svg';
import img11 from '../../Assets/images/Group5.svg';
import img12 from '../../Assets/images/Group 83.svg';
import img13 from '../../Assets/images/Group 91.svg';

export default function Filter() {
  const [vibrating, setVibrating] = useState(false);

  const handleRotateEnter = () => {
    setVibrating(true);
    navigator.vibrate([200]); 
  };
  const handleRotateLeave = () => {
    setVibrating(false);
  };
  return (
    <>
      <h2 className='py-3 text-center'>Filters</h2>
      <div className='d-flex justify-content-between m-0 p-0 text-white'>
        <p className='filt'>Filters Applied</p>
        <p>Clear All</p>
      </div>

      <div className='include pt-2 mb-3'>
        <p className='blue ms-2 pt-0 mt-0 ps-2 rounded-2'> Real Estate <i className="fa-solid fa-xmark ps-2"></i></p>
      </div>

      <div className='Color rounded-3'>
        <h4 className='ps-2 pt-3'>Stock</h4>
        <div className='d-flex justify-content-between  div px-2 ms-3'>
          <p className='ticket'>$ TICKER</p>
          <p><i className="fa-solid fa-magnifying-glass search"></i></p>
        </div>
        <div className='ps-2'>
          <h5 className='pt-4'>Industry</h5>
          <div className='d-flex'>
            <div className='brdr1 py-3 px-2 '>
            <div
        className={` ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img1} alt="" width={18} className='ms-2' />
                <span className='ps-1'> Health Care</span>
              </div>
              <div
        className={`pt-1 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img2} alt="" width={18} className='ms-2' />
                <span className='ps-1'> Materials</span>
              </div>
              <div
        className={` pt-1 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img3} alt="" width={15} className='ms-2' />
                <span className='ps-1'> Energy</span>
              </div>
              <div
        className={` pt-1 d-flex ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img11} alt="" width={18} className='ms-2' />
                <span className='ps-1'> Consumer Discretionary</span>
              </div>
              <div
        className={` pt-1 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img4} alt="" width={20} className='ms-2' />
                <span className='ps-1'> Consumer Staples</span>
              </div>
              <div
        className={` pt-1 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img5} alt="" width={20} className='ms-2' />
                <span className='ps-1'> Real Estate</span>
              </div>
            </div>
            <div className='brdr2'>
            <div
        className={` mt-3 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img6} alt="" width={18} className='ms-2' />
                <span className='ps-1'> IT</span>
              </div>
              <div
        className={` pt-1 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img7} alt="" width={18} className='ms-2' />
                <span> Communication</span>
              </div>
              <div
        className={` pt-1 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img8} alt="" width={18} className='ms-2' />
                <span className='ps-1'> Industrials</span>
              </div>
              <div
        className={` pt-1 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img9} alt="" width={18} className='ms-2' />
                <span className='ps-1'> Utilities</span>
              </div>
              <div
        className={`pt-1 ${vibrating ? 'vibrate' : ''}`}
        onMouseEnter={handleRotateEnter}
        onMouseLeave={handleRotateLeave}>
                <img src={img10} alt="" width={18} className='ms-2' />
                <span className='ps-1'> Financials</span>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-around'>
          <div>
            <h5>Market Cap</h5>
            <div>
              <img src={img12} alt="" width={18} className='ms-2' />
              <span className='ps-1'> Micro</span>
            </div>
            <div className='pt-1'>
              <img src={img12} alt="" width={18} className='ms-2' />
              <span className='ps-1'> Small</span>
            </div>
            <div className='pt-1'>
              <img src={img13} alt="" width={18} className='ms-2' />
              <span className='ps-1'> Large</span>
            </div>
          </div>
          <div>
            <h5>Risk Level</h5>
            <div>
              <img src={img12} alt="" width={18} className='ms-2' />
              <span className='ps-1'> Low Risk</span>
            </div>
            <div className='pt-1'>
              <img src={img13} alt="" width={18} className='ms-2' />
              <span className='ps-1'> Mid Risk</span>
            </div>
            <div className='pt-1'>
              <img src={img12} alt="" width={18} className='ms-2' />
              <span className='ps-1'> Low Risk</span>
            </div>
          </div>
        </div>
        <div className={`d-flex justify-content-around py-4 rotate-hover ${vibrating ? 'vibrate' : ''}`} id='last'>
          <div>
            <h5>Strategy</h5>
            <span className='d-block'>Big Option Buys</span>
            <p className='bgg m-0 rounded-2 px-1 my-1'>Merger Arbitrage</p>
            <span className='d-block'>Short Reports</span>
          </div>
          <div>
            <h5>Asset</h5>
            <span className='d-block'>Stocks</span>
            <p className='bgg rounded-2 m-0 px-1 my-1'> Options</p>
            <span className='d-block'>Futures</span>
          </div>
        </div>
      </div>
      <button className='btn but d-block m-auto px-5 py-2 my-3'> Apply</button>
    </>
  );
  }
