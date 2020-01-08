import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import generalStyles from '../../assets/css/general.css';
import styles from './home.css';
import FacebookSVG from '../svg/Facebook';
import InstagramSVG from '../svg/Instagram';
import TwitterSVG from '../svg/Twitter';
import LoadingSVG from '../svg/Loading';
import { 
  handleUserRegistrationInput,
  handleUserRegistrationSubmission, 
} from '../../store/user/user.actions';

class Second extends Component {
  render() {
    // console.log('from Second', this.props)
    let {
      handleUserRegistrationInput,
      handleUserRegistrationSubmission,
      name,
      nameInputErrorMessage,
      tower,
      towerInputErrorMessage,
      unit,
      unitInputErrorMessage,
      email,
      emailInputErrorMessage,
      whatsapp,
      whatsappInputErrorMessage,
      isRegistrationLoading,
    } = this.props
    
    return (
      <div className={ styles.SecondBox }>
        <div className={ generalStyles.ContainerWrapCenter } style={{ height: '100%' }}>
          <div className={ styles.SecondHeading }>DAFTAR</div>
          <form className="needs-validation" className={ generalStyles.ContainerWrapCenter } noValidate>
            <div className="col-12">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  aria-describedby="nameHelp" 
                  placeholder="Nama Lengkap"
                  value={ name }
                  onChange={ (e) => handleUserRegistrationInput(e) }
                />
                <div className={ styles.InvalidFeedback }>{ nameInputErrorMessage }</div>
              </div>
            </div>
            <div className="col-5 col-sm-3">
              <div className="form-group">
                <select 
                  className="form-control" 
                  id="tower" 
                  value={ 'Tower' }
                  onChange={ (e) => handleUserRegistrationInput(e) } placeholder="Tower"
                >
                  <option disabled selected>Tower</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  <option>E</option>
                </select>
                <div className={ styles.InvalidFeedback }>{ towerInputErrorMessage }</div>
              </div>
            </div>
            <div className="col-7 col-sm-9" style={{ paddingLeft: 0 }}>
              <div className="form-group">
                <input 
                  type="number" 
                  className="form-control" 
                  id="unit" 
                  aria-describedby="nomorUnitHelp" 
                  placeholder="Nomor Unit" 
                  value={ unit }
                  onChange={ (e) => handleUserRegistrationInput(e) }
                />
                <div className={ styles.InvalidFeedback }>{ unitInputErrorMessage }</div>
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
                  value={ email }
                  onChange={ (e) => handleUserRegistrationInput(e) }
                />
                <div className={ styles.InvalidFeedback }>{ emailInputErrorMessage }</div>
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
                  value={ whatsapp }
                  onChange={ (e) => handleUserRegistrationInput(e) }
                />
                <div className={ styles.InvalidFeedback }>{ whatsappInputErrorMessage }</div>
              </div>
            </div>
            <div className="col-12">
              <div className={ generalStyles.ContainerWrapCenter }>
                {
                  !isRegistrationLoading ?
                  <button 
                    type="submit" 
                    className={ styles.BlueButton } 
                    onClick={ (e) => handleUserRegistrationSubmission(e, name, tower, unit, email, whatsapp) }
                  >
                    <div>Daftar</div>
                  </button>
                  :
                  <div className={ styles.GrayButton }>
                    <div className={ generalStyles.ContainerWrapCenter }>
                      <LoadingSVG height="24px" width="24px" color="#ffffff" />
                    </div>
                  </div>
                }
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
    nameInputErrorMessage: state.user.nameInputErrorMessage,
    tower: state.user.tower,
    towerInputErrorMessage: state.user.towerInputErrorMessage,
    unit: state.user.unit,
    unitInputErrorMessage: state.user.unitInputErrorMessage,
    email: state.user.email,
    emailInputErrorMessage: state.user.emailInputErrorMessage,
    whatsapp: state.user.whatsapp,
    whatsappInputErrorMessage: state.user.whatsappInputErrorMessage,
    isRegistrationLoading: state.user.isRegistrationLoading,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  handleUserRegistrationInput,
  handleUserRegistrationSubmission,
}, dispatch)

// const mapDispatchToProps = dispatch => {
//   return {
//     onHello: () => dispatch({ type: "HELLO_SAGA" }),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Second);