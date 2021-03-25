import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
