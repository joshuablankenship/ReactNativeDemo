import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/LoginStyles';
import {authorize} from 'react-native-app-auth';
import config from '../services/AuthService';
interface Props {
  navigation: any;
}
export default class Login extends Component<Props> {
  _onPressButtonGoogle = async () => {
    // use the client to make the auth request and receive the authState
    try {
      const result = await authorize(config);
      if (result.accessToken) {
        this.props.navigation.navigate('Main');
      }
      // result includes accessToken, accessTokenExpirationDate and refreshToken
    } catch (error) {
      console.log(error);
    }
  };
  _onPressButton = async () => {
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={require('../images/PYh.gif')} />
          <View style={styles.alternativeLayoutButtonContainer} />

          <TouchableOpacity
            style={styles.button}
            onPress={this._onPressButtonGoogle}>
            <Image source={require('../images/Google.png')} />
            <Text> Login with Google</Text>
          </TouchableOpacity>
          <Text style={styles.link} onPress={this._onPressButton}>
            Continue
          </Text>
        </View>
      </View>
    );
  }
}
