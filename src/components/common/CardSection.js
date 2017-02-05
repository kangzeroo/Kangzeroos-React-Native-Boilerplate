import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, style }) => {
  // style={ [ styleA, styleB ] }
  return (
    <View style={[styles.containerStyle, style]}>
      { children }
    </View>
  );
};

CardSection.propTypes = {
  children: React.PropTypes.object,
  style: React.PropTypes.object,         // for additional styling
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd'
  }
};

export { CardSection };
