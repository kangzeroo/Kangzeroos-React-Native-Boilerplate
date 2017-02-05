import React, { Component } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import Router from './Router'
import Store from './Store'

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
  //
  // render() {
  //   return (
  //     <Provider store={Store}>
  //       <Router />
  //     </Provider>
  //   )
  // }


  render() {
    return (
      <Provider store={Store}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
      </Provider>
    )
  }

}

App.propTypes = {

}

const styles = {
  welcome: {
    flex: 1,
    padding: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default App;
