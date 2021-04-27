import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput,Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import registerScreen from './screens/registerScreen';
import HomeScreen from './screens/HomeScreen';



const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle:{backgroundColor:"#2C6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",

}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} options={globalScreenOptions} />
      <Stack.Screen name='Register' component={registerScreen} options={globalScreenOptions} />
      <Stack.Screen name='Home' component={HomeScreen} options={globalScreenOptions}/>

      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Text>Let Build p!</Text>
        <StatusBar style="auto" />
        <TextInput style={{width:100,height:40,borderColor:'gray',borderWidth:1}} defaultValue=""></TextInput>
    </View> */}
  </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
