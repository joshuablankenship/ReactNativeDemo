import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '../styles/LoginStyles';
import CatList from '../components/CatList';
import getBreeds from '../services/HttpService';

interface AppProps {
  navigation: any;
}
interface AppState {
  catInfo: Array<any>;
}
export default class Main extends Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      catInfo: [],
    };
  }
  async componentDidMount() {
    await this._loadBreeds();
  }
  _loadBreeds = async () => {
    await getBreeds().then((res: any) =>
      this.setState({
        catInfo: res,
      }),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <CatList navigation={this.props.navigation} info={this.state.catInfo} />
      </View>
    );
  }
}
