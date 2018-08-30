/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Judul/>
        <Text style={styles.instructions}>Nama    : Viona Resti Ananda </Text>
        <Text style={styles.instructions}>Kelas   : XI RPL 3 </Text>
        <Text style={styles.instructions}>No      : 38 </Text>
        <Image style={{width: 400, height:400}}
        source={require('./vivi.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
