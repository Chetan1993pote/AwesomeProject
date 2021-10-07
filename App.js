import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

//import Splash from './Splash';
import Login from './src/Pages/Login';

export default class App extends Component {
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#6ED4C8'
    }
});