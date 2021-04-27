import React, { useEffect, useState } from 'react'
import {StatusBar, StyleSheet,Text,TextInput,View , KeyboardAvoidingView,Image} from 'react-native'
// import { expo } from 'react-native/Libraries/Animated/src/Easing'
import { Button, Input } from 'react-native-elements';
import { auth , db} from '../firebase';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signin = () => {console.log(password)
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
                navigation.navigate("Home");
      })
      .catch((error) => alert(error));
  }
  
    return(
        <KeyboardAvoidingView style={style.container}>
            <StatusBar style="light"/>
        
            <Image
                source={{ uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png' }}
                style={{ width: 200, height: 200 }}
                />          
            
         <Input placeholder="email"
                    type="email" value={email} onChangeText={(text) => setEmail(text)} containerStyle={ style.inputStyle}
        />
                <Input placeholder="password"
                     type="password" value={password} onChangeText={(text) => setPassword(text)} containerStyle={ style.inputStyle}
            />
        <Button containerStyle={style.button} title='Login' onPress={ signin} />
        <Button containerStyle={style.button}   onPress= { ()=>navigation.navigate("Register")}  title='Register'/>

      </KeyboardAvoidingView>
    )
}

export default LoginScreen
const style = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: 300,
     marginTop: 10,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
});