import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const data = [
  {id: 1, name: 'name_1', email: 'email_1@gmail.com'},
  {id: 2, name: 'name_2', email: 'email_2@gmail.com'},
  {id: 3, name: 'name_3', email: 'email_3@gmail.com'},
];
const Sample = () => {
  const [selectedId, setSelectedId] = useState(null);

  function renderItem({item}) {
    return (
      <TouchableOpacity onPress={() => setSelectedId(item.id)}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default Sample;
