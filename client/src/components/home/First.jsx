import React, { PureComponent } from 'react';

import generalStyles from '../../assets/css/general.css';
import styles from './home.css'
import BackgroundImg from '../../assets/images/background.png';

class First extends PureComponent {
  render() {
    return (
      <div className={ styles.ImageContainer }>
        <img src={ BackgroundImg } alt="Background" style={{ width:'100%', height: '100vh' }} />
        <div className={ styles.CenteredContainer }>
          <div className={ styles.WhiteCover }>
            <div className={ styles.BlackHeadText }>KOMUNITAS</div>
          </div>
          <div className={ styles.WhiteCover }>
            <div className={ styles.BlackHeadText1 }>PEMILIK <span style={{ color: '#103D92' }}>TPLAZA</span></div>
          </div>
          <div className={ styles.WhiteDescText }>Mari bergabung dengan komunitas pemilik apartemen TPlaza.</div>
          <div className={ generalStyles.ContainerWrapCenter }>
            <div className={ styles.AbsoluteDiv }>
              <a href="#Register" style={{ textDecoration: 'none' }}>
                <div className={ styles.BlackButton }>
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