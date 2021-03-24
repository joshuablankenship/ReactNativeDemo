import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    },
    header: {
      marginTop: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      fontSize: 50,
      fontWeight: 'bold',
     },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'center',
    },
    button: {
      backgroundColor: '#859a9b',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
      marginRight: 110,
      marginLeft: 110,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: -1
    },
  });