import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Logo from '../Components/Logo';

var bg = require('./splashIcon.jpeg');
var logo = require('./food.png');

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <View style={styles.signUpText}>
        <Text style ={styles.signUpTextStyle}>Don't have an account yet?</Text>
        <Text style ={styles.buttonSignUP}>Sign Up  </Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#6ED4C8'
  },
  signUpText: {
    flex: 1,
    justifyContent: 'center',//'flex-end',
    alignItems: "center",
    marginVertical:30
  },
  signUpTextStyle:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
        flexDirection : 'row'
    },

    buttonSignUP:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});