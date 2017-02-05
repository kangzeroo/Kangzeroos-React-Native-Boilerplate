import React, { Component } from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import Router from './Router'
import Store from './Store'
import CameraComponent from './components/camera/CameraComponent'

class App extends Component {

  // componentWillMount() {
  //   const config = {
  //     apiKey: "xxxxx",
  //     authDomain: "xxxx.firebaseapp.com",
  //     databaseURL: "https://xxxx.firebaseio.com",
  //     storageBucket: "xxxx.appspot.com",
  //     messagingSenderId: "xxxx"
  //   };
  //   firebase.initializeApp(config);
  // }
  
  render() {
    return (
      <Provider store={Store}>
        <Router />
      </Provider>
    )
  }

}

App.propTypes = {

}

export default App;
