import React from 'react';
import { StyleSheet, Text, View, Button,TextInput,FlatList, SafeAreaView,StatusBar,Platform} from 'react-native';
import {createBottomTabNavigator,createStackNavigator } from 'react-navigation'
import 'core-js/es6/map'
import 'core-js/es6/symbol'
import 'core-js/fn/symbol/iterator'

class Project extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
          <View>
              <Text style={{flex:1,backgroundColor:'#80ff00',marginBottom:50}} >{this.props.text}</Text>
          </View>
        )
    }

}

class Page2 extends React.Component{
    static navigationOptions = {
      title: 'LIST'
    };      
    constructor(){
      super()
      this.state={elems:[]}
    }
    componentDidMount(){
      Array.from(Array(100).keys()).forEach((e,i)=>{
        console.log(e,i);
        this.setState(state=>{state.elems.push({key:''+i});return state;})
      })
  
    }
    render() {
      return (
        <SafeAreaView style={styles.container} >
        {/*<Text> COUCOU !!!! <Text>{(this.props.navigation.getParam('tekst',''))}</Text> </Text>*/}
        <StatusBar
          //backgroundColor="blue"
          barStyle="dark-content"
          backgroundColor="#80ff40"
          //style={{height: (Platform.OS === 'ios') ? 20 : 20}}
          translucent={true}
        />
        {console.log(this.state.elems)}
        <FlatList
          data={this.state.elems.length ==0 ? this.state.elems : this.state.elems }
          renderItem={({item})=> <Project text={item.key} />}
          style={{flex:1, alignSelf: 'stretch',}}
         />    
         
        </SafeAreaView>
      );
    }
  }
  export default Page2;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  