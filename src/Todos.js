import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {createStackNavigator} from '@react-navigation/stack';
import User from './User';
const windowWidth = Dimensions.get('window').width;

function Todos({todo, navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.image}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <ImageBackground style={styles.circle}>
          <Text>{todo.id}</Text>
        </ImageBackground>

        <View style={styles.center}>
          <Text numberOfLines={1}>{todo.title}</Text>
        </View>
      </TouchableOpacity>
      <CheckBox
        style={styles.checkbox}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 5,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',

    // backgroundColor: 'grey',
  },
  image: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 10,
    height: 100,
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    marginLeft: 20,
  },
});

export default Todos;
