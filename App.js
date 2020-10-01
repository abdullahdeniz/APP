import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Share} from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Account from './components/admin/Login';

import Login from "./components/admin/Login2";


class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
       

        <Router>
        <Route path="/" exact component={Account} />
        {/* <Route path="/about" component={Share} /> */}
      </Router>
      </View> 
      
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#646EC2',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default App;