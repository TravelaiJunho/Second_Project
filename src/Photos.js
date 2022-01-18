import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import ImageModal from 'react-native-image-modal';

const windowWidth = Dimensions.get('window').width;
const windowHight = Dimensions.get('window').height;

const Photos = ({photo, count}) => {
  const [height, setHeight] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  Image.getSize(photo.thumbnailUrl, (w, h) => {
    setHeight(h * (windowWidth / w));
  });

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Image
            style={styles.modalView}
            source={{uri: photo.thumbnailUrl, height}}
            resizeMode="cover"
          />
        </Pressable>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <Image style={styles.image} source={{uri: photo.thumbnailUrl}} />
        <View style={styles.bottom}>
          <Text numberOfLines={2} style={styles.text}>
            {photo.title}
          </Text>
          <Text style={styles.text}>
            {photo.id}/{count}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    width: windowWidth,
    height: 300,
  },
  image: {
    width: '100%',
    height: 200,
    position: 'absolute',
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
  modalView: {
    marginTop: windowHight - 600,
    width: '100%',
  },
  bottom: {alignItems: 'center', marginTop: 120},
});

export default Photos;
