import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import Welcome from './components/Welcome'
import Camera from './components/camera/CameraComponent'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key='main'>
        <Scene key='welcome' component={Welcome} title='Home' initial />
        <Scene key='camera' component={Camera} title='Camera' />
      </Scene>

    </Router>
  )
};

export default RouterComponent;
