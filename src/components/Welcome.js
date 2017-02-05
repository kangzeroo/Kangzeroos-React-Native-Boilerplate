import React from 'react'
import { View, Text } from 'react-native'
import { Button } from './common'
import { Actions } from 'react-native-router-flux'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <Button style={styles.cameraButton} onPress={()=>Actions.camera()}>Click For Camera</Button>
    </View>
  )
}

Welcome.propTypes = {

}

const styles = {
  container: {
    height: 50,
    flex: 1,
  },
  welcome: {
    flex: 1,
    padding: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    height: 10
  },
}

export default Welcome
