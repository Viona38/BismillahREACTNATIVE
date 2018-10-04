
import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';
import Login from './Screens/Login';

type Props = {};
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#455a64'
  },
  instructions: {
    textAlign: 'center',
    color: '#455a64',
    marginBottom: 5,
  },
});
