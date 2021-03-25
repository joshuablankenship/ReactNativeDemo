import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 30,
  },
  link: {
    marginHorizontal: 30,
    marginTop: 5,
    color: 'blue',
  },
  text: {
    marginHorizontal: 30,
    marginTop: 5,
  },
  textBold: {
    marginHorizontal: 30,
    marginTop: 5,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    marginHorizontal: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 5,
    marginLeft: 33,
    marginTop: 5,
  },
});
