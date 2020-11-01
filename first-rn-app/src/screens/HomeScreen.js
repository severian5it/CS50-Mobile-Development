import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native';

class HomeScreen extends Component {

    state = {
      currentText:'',
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>{this.state.currentText}</Text>
          <TextInput onChangeText={(text)=>this.setState({currentText:text})} style={{width:300,height:40,backgroundColor:'skyblue', paddingHorizontal: 10}}/>
          <Button onPress={()=>{alert(this.state.currentText)}} title="Button"/>
          <Button onPress={()=>{this.props.navigation.navigate('second')}} title="Next Screen"/>
        </View>
      );
    }
  }

  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

export default HomeScreen;