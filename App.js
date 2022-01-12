// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import React, {Component, useEffect, useState} from 'react';
//import React in our code.
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import Sample from './src/Sample';
import Photos from './src/Photos';
import Todos from './src/Todos';
const windowWidth = Dimensions.get('window').width;

const App = () => {
  const [photos_box] = useState([]);
  const [todos] = useState([]);

  axios
    .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(function (response) {
      for (let index = 0; index < response.data.length; index++) {
        photos_box.push(response.data[index]);
      }
    })
    .catch(function (error) {
      alert(error.message);
    });

  axios
    .get('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then(function (response) {
      for (let index = 0; index < response.data.length; index++) {
        todos.push(response.data[index]);
      }
    })
    .catch(function (error) {
      alert(error.message);
    });

  return (
    <SafeAreaView>
      <FlatList
        // keyExtractor={(item, index) => item.id}
        data={photos_box}
        horizontal={true}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={windowWidth}
        renderItem={({item}) => <Photos num={item} />}
      />

      <FlatList
        data={todos}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={windowWidth}
        renderItem={({item}) => <Todos num={item} />}
      />

      {/* <Sample></Sample> */}
      <Text style={{textAlign: 'center', marginTop: 18}}>박준호</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    width: '100%',
    marginTop: 16,
  },
});

export default App;
