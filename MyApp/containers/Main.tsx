import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '../styles/LoginStyles';
import CatInfo from '../assets/CatInfo';
import CatList from '../components/CatList';

interface AppProps {}
interface AppState {
  catInfo: Array<any>;
  selectedBreed: string;
}
export default class Main extends Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      catInfo: CatInfo,
      selectedBreed: '',
    };
  }
  _onPressButton = async () => {};

  render() {
    return (
      <View style={styles.container}>
        <CatList />
        {/* <Images /> */}
      </View>
    );
  }
  pickerChange(index: number): void {
    this.state.catInfo.map((_v, i) => {
      if (index === i) {
        this.setState({
          selectedBreed: this.state.catInfo[index].name,
        });
      }
    });
  }
}
