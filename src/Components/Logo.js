import React, { Component } from 'react';


import { StyleSheet, View, Image, Alert, Text, TextInput, TouchableOpacity } from 'react-native';
import Login from '../Pages/Login';



export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Images/food.png')}
                    style={{ height: 85, width: 85 }} />
                <Text style={styles.logoText}>FUNN FOOD's</Text>
                <Text style={styles.titleText}>Welcome to Funn Food's Store</Text>

                <TextInput style={styles.inputBox}
                    keyboardType = 'email-address'
                    placeholder="Enter Email" color='black' 
                    onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox2}
                    secureTextEntry={true}
                    placeholder="Enter Password" color='black' 
                    ref={(input) => this.password = input}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 150,
        alignItems: "center",
        //justifyContent:'space-between'
    },
    logoText:
    {
        marginVertical: 10,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: "green",
        marginVertical: 15
    },

    titleText:
    {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#696969',
        paddingBottom: 30
    },

    inputBox:
    {
        padding: 15,
        width: 330,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#dcdcdc',//'rgba(255, 0, 255, 0.2)',
        borderRadius: 25,
        marginVertical: 15
    },

    inputBox2:
    {
        padding: 15,
        width: 330,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#dcdcdc',//'rgba(255, 0, 255, 0.2)',
        borderRadius: 25

    },

    button: {
        width: 300,
        backgroundColor: '#b05d3c',
        borderRadius: 25,
        marginVertical: 35,
        paddingVertical: 16
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center'
    }

});