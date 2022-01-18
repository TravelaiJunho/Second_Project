import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';

import axios from 'axios';
import Photos from './Photos';
import Todos from './Todos';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {CustomPagination} from './CustomPagination';
import {Button} from 'react-scroll';
import {TouchableOpacity} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;

function HomeScreen({navigation}) {
  const [photos_box, setPhotosBox] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(function (response) {
        let box = [];
        for (let index = 0; index < response.data.length; index++) {
          box.push(response.data[index]);
        }
        setPhotosBox(box);
      })
      .catch(function (error) {
        alert(error.message);
      });

    axios
      .get('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(function (response) {
        let box2 = [];
        for (let index = 0; index < response.data.length; index++) {
          box2.push(response.data[index]);
        }
        setTodos(box2);
      })
      .catch(function (error) {
        alert(error.message);
      });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SafeAreaView>
        <View style={styles.navi}>
          <SwiperFlatList
            data={photos_box}
            horizontal={true}
            snapToAlignment="center"
            snapToInterval={windowWidth}
            showPagination
            PaginationComponent={CustomPagination}
            loop={false}
            renderItem={({item}) => (
              <Photos photo={item} count={photos_box.length} />
            )}
          />
        </View>
        <FlatList
          data={todos}
          snapToAlignment="center"
          snapToInterval={windowWidth}
          renderItem={({item}) => <Todos todo={item} navigation={navigation} />}
        />
        <Text
          style={{textAlign: 'center', marginTop: 18}}
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          박준호
        </Text>
      </SafeAreaView>
    </View>
  );
}

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
  Showbox: {
    height: 100,
  },
  paginationStyle: {
    top: 0,
  },
  navi: {
    height: 230,
  },
});

export default HomeScreen;
