import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/LoginStyles';
import {authorize} from 'react-native-app-auth';
import config from '../services/AuthService';
interface Props {
  navigation: any;
}
export default class Login extends Component<Props> {
  _onPressButton = async () => {
    // use the client to make the auth request and receive the authState
    try {
      // const result = await authorize(config);
      this.props.navigation.navigate('Main');
      // console.warn(result);
      // result includes accessToken, accessTokenExpirationDate and refreshToken
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={require('../images/PYh.gif')} />
          <View style={styles.alternativeLayoutButtonContainer} />
          <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
            <Image source={require('../images/Google.png')} />
            <Text> Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
