import React, { Component } from 'react';

import generalStyles from '../../assets/css/general.css';
import styles from './home.css';
import FacebookSVG from '../svg/Facebook';
import InstagramSVG from '../svg/Instagram';
import TwitterSVG from '../svg/Twitter';

class Second extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <div className={ styles.SecondHeading }>DAFTAR</div>
          <form className={ generalStyles.ContainerWrapCenter }>
            <div className="col-12">
              <div className="form-group">
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Nama Lengkap" />
              </div>
            </div>
            <div className="col-4 col-sm-3">
              <div className="form-group">
                <input type="text" className="form-control" id="tower" aria-describedby="towerHelp" placeholder="Tower" />
              </div>
            </div>
            <div className="col-8 col-sm-9" style={{ paddingLeft: 0 }}>
              <div className="form-group">
                <input type="text" className="form-control" id="nomorUnit" aria-describedby="nomorUnitHelp" placeholder="Nomor Unit" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input type="tel" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Nomor Whatsapp" />
              </div>
            </div>
            <div className="col-12">
              <div className={ generalStyles.ContainerWrapCenter }>
                <div className={ styles.BlueButton }>
                  <div>Daftar</div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={ generalStyles.ContainerWrapCenter }>
                <div className={ styles.SocialMediaBox }>
                  <FacebookSVG height="36px" width="36px" color="#103D92"/>
                </div>
                <div className={ styles.SocialMediaBox }>
                  <InstagramSVG height="36px" width="36px" color="#103D92"/>
                </div>
                <div className={ styles.SocialMediaBox }>
                  <TwitterSVG height="36px" width="36px" color="#103D92"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Second;