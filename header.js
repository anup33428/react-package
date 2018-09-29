import React from 'react';
import {
  Text,
  View
} from 'react-native';


const Header = (props) => {
  const { headerStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={headerStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  headerStyle: {
      fontSize: 20

  },
  viewStyle: {
      backgroundColor: '#ECF3F2',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      paddingTop: 10,
      paddingBottom: 10,
      elevation: 5
    }
};

export default Header;
