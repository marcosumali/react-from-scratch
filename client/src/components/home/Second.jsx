import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import generalStyles from '../../assets/css/general.css';
import styles from './home.css';
import FacebookSVG from '../svg/Facebook';
import InstagramSVG from '../svg/Instagram';
import TwitterSVG from '../svg/Twitter';
import { handleUserRegistration } from '../../store/user/user.actions';

class Second extends Component {
  render() {
    console.log('from Second', this.props)
    let {
      handleUserRegistration
    } = this.props
    return (
      <div className={ styles.SecondBox }>
        <div className={ generalStyles.ContainerWrapCenter } style={{ height: '100%' }}>
          <div className={ styles.SecondHeading }>DAFTAR</div>
          <form className={ generalStyles.ContainerWrapCenter }>
            <div className="col-12">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  aria-describedby="nameHelp" 
                  placeholder="Nama Lengkap"
                  onChange={ (e) => handleUserRegistration(e) }
                />
              </div>
            </div>
            <div className="col-4 col-sm-3">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="tower" 
                  aria-describedby="towerHelp" 
                  placeholder="Tower" 
                  onChange={ (e) => handleUserRegistration(e) }
                />
              </div>
            </div>
            <div className="col-8 col-sm-9" style={{ paddingLeft: 0 }}>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="unit" 
                  aria-describedby="nomorUnitHelp" 
                  placeholder="Nomor Unit" 
                  onChange={ (e) => handleUserRegistration(e) }
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  aria-describedby="emailHelp" 
                  placeholder="Email" 
                  onChange={ (e) => handleUserRegistration(e) }
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" 
                  aria-describedby="phoneHelp" 
                  placeholder="Nomor Whatsapp" 
                  onChange={ (e) => handleUserRegistration(e) }
                />
              </div>
            </div>
            <div className="col-12">
              <div className={ generalStyles.ContainerWrapCenter }>
                <div className={ styles.BlueButton }>
                  <div>Daftar</div>
                </div>
              </div>
            </div>
          </form>
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    tower: state.user.tower,
    unit: state.user.unit,
    email: state.user.email,
    whatsapp: state.user.whatsapp,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  handleUserRegistration
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Second);