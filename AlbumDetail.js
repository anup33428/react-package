import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardItem';
import Button from './Button';

const AlbumDetail = function (props) {
  return (
    <Card>
      <CardSection>
        <View style={Styles.thumnailContainerStyle}>
          <Image
          style={Styles.thumbnailStyle}
          source={{ uri: props.album.thumbnail_image }}
          />

        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.headerTextStyle}> {props.album.title} </Text>
          <Text> {props.album.artist} </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
        style={Styles.imageStyle}
        source={{ uri: props.album.image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.url)} text='To Buy' />
      </CardSection>

    </Card>
  );
};

const Styles = {
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
