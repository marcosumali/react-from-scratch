import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import generalStyles from '../../assets/css/general.css';
import styles from './home.css'

const First = (props) => {
  const [count, setCount] = useState(0)
  // console.log('from first functional', props)

  useEffect(() => {
    // console.log('---', count)
    document.title = `Clicked: ${count}`
  })

  return (
    <div className={ styles.ImageContainer }>
      <img 
        src="/src/assets/images/background.png" 
        alt="Background" 
        style={{ width:'100%', height: '100vh' }}
        onClick={() => setCount(count+1)}
      />
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
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
  }
}


export default connect(mapStateToProps, null) (First);