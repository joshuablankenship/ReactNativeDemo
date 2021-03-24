import React, { Component } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/LoginStyles';
import { prefetchConfiguration, authorize, refresh, revoke } from 'react-native-app-auth';
import config from '../services/AuthService';



export default class Login extends Component {
    _onPressButton= async ()=> {
        // use the client to make the auth request and receive the authState
    try {
    const result = await authorize(config);
    console.log(result);
    console.warn(result);
    // result includes accessToken, accessTokenExpirationDate and refreshToken
        } catch (error) {
    console.log(error);
  }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Cat App</Text>
                <Image source={require("../images/PYh.gif")}/>
                <View style={styles.alternativeLayoutButtonContainer}>
                

        
      </View>
      <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <Image source={require("../images/Google.png")}/>
        <Text> Login with Google</Text>
        </TouchableOpacity>
            </View>
        );
    }
}

