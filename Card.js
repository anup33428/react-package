import React from 'react';
import { View } from 'react-native';

const Card = function (props) {
  return (
    <View style={styles.cardContainer}>
      {props.children}
    </View>
  );
};

const styles = {
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
