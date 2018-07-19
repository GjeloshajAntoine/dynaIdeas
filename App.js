import React from 'react';
import { StyleSheet, Text, View, Button,TextInput,FlatList, SafeAreaView,StatusBar,Platform} from 'react-native';
import {createBottomTabNavigator,createStackNavigator } from 'react-navigation'
import 'core-js/es6/map'
import 'core-js/es6/symbol'
import 'core-js/fn/symbol/iterator'
import homePage from './views/home.js'
import Page2 from './views/page2'

StatusBar.setTranslucent(true)
StatusBar.setBackgroundColor('#80ff40')



const homePageStack=createStackNavigator(
  {
    home:homePage
  }
)
const Page2Stack=createStackNavigator(
  {
    Page2:Page2
  }
)
const RootStack = createBottomTabNavigator (
  {
    Home:homePageStack,
    Page2:Page2Stack
  },
  {
    initialRouteName: 'Home',
  }
);
export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
