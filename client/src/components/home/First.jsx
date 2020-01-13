import React, { PureComponent } from 'react';

import '../../assets/css/general.css';
import styles from './home.css'
import BackgroundImg from '../../assets/images/background.png';

class First extends PureComponent {
  render() {
    return (
      <div className='ImageContainer'>
        <img src={ BackgroundImg } alt="Background" style={{ width:'100%', height: '100vh' }} />
        <div className='CenteredContainer'>
          <div className='WhiteCover'>
            <div className='BlackHeadText'>KOMUNITAS</div>
          </div>
          <div className='WhiteCover'>
            <div className='BlackHeadText1'>PEMILIK <span style={{ color: '#103D92' }}>TPLAZA</span></div>
          </div>
          <div className='WhiteDescText'>Mari bergabung dengan komunitas pemilik apartemen TPlaza.</div>
          <div className='ContainerWrapCenter'>
            <div className='AbsoluteDiv'>
              <a href="#Register" style={{ textDecoration: 'none' }}>
                <div className='BlackButton'>
                  <div>Daftar</div>
                </div>
              </a>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default First;