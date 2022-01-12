import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Todos = ({num}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}>
        <ImageBackground style={styles.circle}>
          <Text>{num.id}</Text>
        </ImageBackground>
        <Text style={styles.center}>{num.title}</Text>
        <CheckBox value={isSelected} onValueChage />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: 120,
  },
  image: {
    height: 100,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: 'white',
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Todos;
