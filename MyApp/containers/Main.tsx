import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/LoginStyles';

export default class Main extends Component {
  _onPressButton = async () => {};

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
