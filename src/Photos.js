import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Photos = ({num}) => {
  const image = {uri: num.thumbnailUr};
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.text}>{num.title}</Text>
        <Text style={styles.text_bottom}>{num.id} </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: 200,
  },
  image: {
    width: windowWidth,
    height: 200,
  },
  text: {
    color: 'black',
    fontSize: 15,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text_bottom: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default Photos;
