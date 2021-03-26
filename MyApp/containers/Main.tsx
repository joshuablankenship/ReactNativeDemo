import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '../styles/LoginStyles';
import CatList from '../components/CatList';
interface AppProps {
  navigation: any;
  route: any;
  info: any;
}
interface AppState {
  catInfo: Array<any>;
}
export default class Main extends Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      catInfo: props.info,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <CatList navigation={this.props.navigation} />
      </View>
    );
  }
}
