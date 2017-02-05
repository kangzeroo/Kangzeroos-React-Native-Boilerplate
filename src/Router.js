import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
      </Scene>

      <Scene key='main'>
      </Scene>
    </Router>
  )
};

export default RouterComponent;
