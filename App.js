import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';
import Header from './src/Cuaca/Header';
import PrakiraanCuaca from './src/Cuaca/PrakiraanCuaca';
import VolumeBalok from './src/serahcai/VolumeBalok';


export default class App extends Component {
  render(){
    return (
      <View style={styles.containerMain}>
        <Header headerText= {'Prakiraan Cuaca'}/>
        <PrakiraanCuaca/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
      containerMain: {
        flex: 1,
      }
    });
