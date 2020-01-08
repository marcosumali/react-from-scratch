import React, { Component } from 'react';

import FirstComponent from '../components/home/First';
import FirstFunctionalComponent from '../components/home/First_Functional';
import SecondComponent from '../components/home/Second';
import generalStyles from '../assets/css/general.css';

class Home extends Component {
  render() {
    return (
      <div className="">
        <div className={ generalStyles.ContainerWrapCenter }>
          <div id="FirstComponent" className="col-lg-6 col-md-12" style={{ padding: 0 }}>
            <FirstComponent />
            {/* <FirstFunctionalComponent /> */}
          </div>
          <div id="Register" className="col-lg-6 col-md-12" style={{ padding: 0 }}>
            <SecondComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;