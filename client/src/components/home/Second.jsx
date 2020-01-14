import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../../assets/css/general.css';
import './home.css';
import FacebookSVG from '../svg/Facebook';
import InstagramSVG from '../svg/Instagram';
import TwitterSVG from '../svg/Twitter';
import LoadingSVG from '../svg/Loading';
import { 
  // handleUserRegistrationInput,
  // handleUserRegistrationSubmission, 
  handleUserRegisterAction,
  handleUserRegisterSubmission
} from '../../store/user/user.actions';

class Second extends Component {
  render() {
    // console.log('from Second', this.props)
    let {
      // handleUserRegistrationInput,
      handleUserRegisterInput,
      // handleUserRegistrationSubmission,
      handleUserRegisterSub,
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
      <div className='SecondBox'>
        <div className='ContainerWrapCenter' style={{ height: '100%' }}>
          <div className='SecondHeading'>DAFTAR</div>
          <form className="needs-validation" className='ContainerWrapCenter' noValidate>
            <div className="col-12">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  aria-describedby="nameHelp" 
                  placeholder="Nama Lengkap"
                  value={ name }
                  onChange={ (e) => handleUserRegisterInput(e) }
                />
                <div className='InvalidFeedback'>{ nameInputErrorMessage }</div>
              </div>
            </div>
            <div className="col-5 col-sm-3">
              <div className="form-group">
                <select 
                  className="form-control" 
                  id="tower" 
                  onChange={ (e) => handleUserRegisterInput(e) } 
                  placeholder="Tower"
                >
                  <option disabled selected>Tower</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  <option>E</option>
                </select>
                <div className='InvalidFeedback'>{ towerInputErrorMessage }</div>
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
                  onChange={ (e) => handleUserRegisterInput(e) }
                />
                <div className='InvalidFeedback'>{ unitInputErrorMessage }</div>
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
                  onChange={ (e) => handleUserRegisterInput(e) }
                />
                <div className='InvalidFeedback'>{ emailInputErrorMessage }</div>
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
                  onChange={ (e) => handleUserRegisterInput(e) }
                />
                <div className='InvalidFeedback'>{ whatsappInputErrorMessage }</div>
              </div>
            </div>
            <div className="col-12">
              <div className='ContainerWrapCenter'>
                {
                  !isRegistrationLoading ?
                  <button 
                    type="submit" 
                    className='BlueButton'
                    onClick={ (e) => handleUserRegisterSub({ e, name, tower, unit, email, whatsapp} ) }
                  >
                    <div>Daftar</div>
                  </button>
                  :
                  <div className='GrayButton'>
                    <div className='ContainerWrapCenter'>
                      <LoadingSVG height="24px" width="24px" color="#ffffff" />
                    </div>
                  </div>
                }
              </div>
            </div>
          </form>
          <div className="col-12">
            <div className='ContainerWrapCenter'>
              <div className='SocialMediaBox'>
                <FacebookSVG height="36px" width="36px" color="#103D92"/>
              </div>
              <div className='SocialMediaBox'>
                <InstagramSVG height="36px" width="36px" color="#103D92"/>
              </div>
              <div className='SocialMediaBox'>
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

// // THUNK
// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   handleUserRegistrationInput,
//   handleUserRegistrationSubmission,
// }, dispatch)

// // SAGA
const mapDispatchToProps = dispatch => ({
  handleUserRegisterInput: (data) => {
    dispatch(handleUserRegisterAction(data))
  },
  handleUserRegisterSub: (data) => {
    dispatch(handleUserRegisterSubmission(data))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Second);