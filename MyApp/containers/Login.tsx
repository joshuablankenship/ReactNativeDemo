import React, { Component } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/LoginStyles';
// @ts-ignore
import {GOOGLE_ID} from 'react-native-dotenv';

export default class Login extends Component {
    _onPressButton() {
        alert('You tapped the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../images/Google.png")}/>
        <Text> Login with Google</Text>
        </TouchableOpacity>
      </View>
            </View>
        );
    }
}
function alert(arg0: string) {
    console.warn(arg0);
    console.warn(GOOGLE_ID);
}

