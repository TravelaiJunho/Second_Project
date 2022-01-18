import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  FlatList,
  Modal,
  Button,
  Pressable,
  Alert,
  Linking,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  WebviewContainer,
  onDecline,
  SafeAreaView,
} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import Mailer from 'react-native-mail';

import {WebView} from 'react-native-webview';
import {ScrollView} from 'react-native-gesture-handler';

const Userinfo = ({user}) => {
  handleEmail = () => {
    Mailer.mail(
      {
        subject: 'need help',
        recipients: ['support@example.com'],
        ccRecipients: ['supportCC@example.com'],
        bccRecipients: ['supportBCC@example.com'],
        body: '<b>A Bold Body</b>',
        isHTML: true,
        attachment: {
          path: '', // The absolute path of the file from which to read data.
          type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
          name: '', // Optional: Custom filename for attachment
        },
      },
      (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {
              text: 'Ok',
              onPress: () => console.log('OK: Email Error Response'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('CANCEL: Email Error Response'),
            },
          ],
          {cancelable: true},
        );
      },
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={styles.box}>
      <SafeAreaView>
        <ScrollView style={styles.sidescroll} horizontal={true}></ScrollView>
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>Username: {user.username}</Text>

        <Text
          style={styles.text}
          // '${user.email}'
          onPress={this.handleEmail}
          title="Email Me"
          color="#841584"
          accessabilityLabel="Purple Email Me Button">
          Email: {user.email}
        </Text>
        <Collapse>
          <CollapseHeader>
            <View>
              <Text style={styles.text}>Adress</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.text}>Street: {user.address?.street}</Text>
            <Text style={styles.text}>Suite:{user.address?.suite}</Text>
            <Text style={styles.text}>City: {user.address?.city}</Text>
            <Text style={styles.text}>Zipcode: {user.address?.zipcode}</Text>
          </CollapseBody>
        </Collapse>
        <Text
          onPress={() => {
            Linking.openURL('tel:${user.phone}');
          }}
          style={styles.text}>
          {user.phone}
        </Text>

        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={styles.text}>website</Text>
        </Pressable>

        <SafeAreaView>
          <Modal visible={modalVisible}>
            <View style={styles.modal}>
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                title="Close"
                color={'black'}
              />
              <View style={styles.modalContainer}>
                <WebView
                  source={{uri: 'https://github.com/facebook/react-native'}}
                />
              </View>
            </View>
          </Modal>
        </SafeAreaView>

        <Collapse>
          <CollapseHeader>
            <View>
              <Text style={styles.text}>Company: {user.company.name}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.text}>
              catchPhrase: {user.company.catchPhrase}
            </Text>
            <Text style={styles.text}>bs: {user.company.bs}</Text>
          </CollapseBody>
        </Collapse>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    marginBottom: 60,
  },
  text: {
    marginTop: 40,
    fontSize: 30,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: '80%',
  },
});

export default Userinfo;
