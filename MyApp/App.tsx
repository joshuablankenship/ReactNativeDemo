
 import React from 'react';
 import {
   View,
 } from 'react-native';

import Login from './containers/Login';

 const App = () => {

   return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Login/>
  </View>
       
   );
 };


 export default App;
