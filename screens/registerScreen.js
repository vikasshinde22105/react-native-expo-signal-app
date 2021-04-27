import React,{ useState } from 'react'
import {KeyboardAvoidingView, StatusBar, StyleSheet,TextInput,View} from 'react-native'
// import { expo } from 'react-native/Libraries/Animated/src/Easing'
import { Button, Input ,Text,Image} from 'react-native-elements';

import { auth } from "../firebase";

const registerScreen = ({navigation}) =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = () => {
        console.log('register');
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=> {        
            authUser.user.updateProfile({
                displayName: name,
                photoUrl:imageUrl,
            }).catch(error =>  alert(error.message));
        })
    }
    return (
        <KeyboardAvoidingView behavior='padding'style={ style.container}>
            <Text h3 style={{marginBottom:50}}>Create a Signal Account</Text>
                <Input placeholder="name"
                    autoFocus type="name" value={name} onChangeText={(text) => setName(text)} containerStyle={ style.inputStyle}
                />
                <Input placeholder="email"
                    type="email" value={email} onChangeText={(text) => setEmail(text)} containerStyle={ style.inputStyle}
        />
                <Input placeholder="Password"
                     type="password" value={password} onChangeText={(text) => setPassword(text)} containerStyle={ style.inputStyle}
            />
            <Input placeholder="User Image"
                     type="url" value={imageUrl} onChangeText={(text) => setImageUrl(text)} containerStyle={ style.inputStyle}
        />
            <Button containerStyle={style.Button} title='Register' onPress={ register} />
 
            <View style={ {height:100}}/>
            </KeyboardAvoidingView>

    )
}

export default registerScreen
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