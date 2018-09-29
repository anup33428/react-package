import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Button = function (props) {
  return (
    <TouchableOpacity
    style={styles.buttonStyle}
    onPress={props.onPress}
    >
      <Text style={styles.textStyle}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};
export default Button;
