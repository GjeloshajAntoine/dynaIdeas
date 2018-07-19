import React from 'react';
import { StyleSheet, Text, View, Button,TextInput,FlatList, SafeAreaView,StatusBar,Platform} from 'react-native';

class homePage extends React.Component {
    static navigationOptions = {
      title: 'DynIdeas'
    };
  
    constructor(){
      super()
      this.state={tekst:''}
    }
    nouvText(text){
      console.log(text);
      this.setState((state)=>{state.tekst=text;return state})
    }
    render() {
      return (
        <View style={styles.container}>
          <Text>{this.state.tekst}</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <TextInput placeholder="c'est ta mère le placeholder" onChangeText={this.nouvText.bind(this)}/>
          <Button title="hey" onPress={()=>this.props.navigation.navigate('Page2',this.state)}/>
        </View>
      );
    }
  }
  export default homePage;
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });