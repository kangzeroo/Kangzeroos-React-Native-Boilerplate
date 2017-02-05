import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection'
import { Button } from './Button'


const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyles, textStyles, cardSectionStyles } = styles

  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={() => {}} // required for android
    >
      <View style={containerStyles}>
        <CardSection style={cardSectionStyles}>
          <Text style={textStyles}>{children}</Text>
        </CardSection>

        <CardSection style={cardSectionStyles}>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

Confirm.propTypes = {
  children: React.PropTypes.object,
  visible: React.PropTypes.object,
  onAccept: React.PropTypes.func.isRequired,
  onDecline: React.PropTypes.func.isRequired,
};

const styles = {
  cardSectionStyles: {
    justifyContent: 'center',
  },
  textStyles: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyles: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
}

export { Confirm }
