// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = ({ headerText }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  )
}

Header.propTypes = {
  headerText: React.PropTypes.string.isRequired,
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
}

// Make the component available to other parts of the app
export { Header };
