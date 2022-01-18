import React, {Component, useEffect, useState} from 'react';
//import React in our code.

import {StyleSheet, View, ScrollView, Text, Dimensions} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

import axios from 'axios';
import Userinfo from './UserInfo';
const windowWidth = Dimensions.get('window').width;

function User() {
  const [user, setuser] = useState(null);
  const [key1, setkey1] = useState(null);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        setuser(response.data[0]);
        setkey1(Object.keys(response.data[0]));
        console.log(user, key1);
        // alert(key1);
      })
      .catch(function (error) {
        alert(error.message);
      });
  }, []);

  //   const renderItem = (item)

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView style={styles.sidescroll} horizontal={true}>
        <Text style={styles.text}>| name</Text>
        <Text style={styles.text}> UserName |</Text>
        <Text style={styles.text}> Adress |</Text>
        <Text style={styles.text}> Phone |</Text>
        <Text style={styles.text}> Website |</Text>
        <Text style={styles.text}> Company |</Text>
      </ScrollView>
      {user && <Userinfo user={user}></Userinfo>}
    </View>
  );
}
const styles = StyleSheet.create({
  sidescroll: {
    width: windowWidth,
  },
  text: {
    fontSize: 30,
  },
});
export default User;

// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
//   "street": "Kulas Light",
//   "suite": "Apt. 556",
//   "city": "Gwenborough",
//   "zipcode": "92998-3874",
//   "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//   }
// },
