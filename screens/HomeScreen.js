import React, { useEffect, useLayoutEffect, useState } from 'react'
import {StatusBar, StyleSheet,Text,TextInput,View , KeyboardAvoidingView} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomListItem from '../component/CustomListItem';
import { auth, db } from "../firebase";
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 


const HomeScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity activeOpacity={ 0.5}>
                     <Avatar rounded source={{uri:"https://cdn.dribbble.com/users/1041205/screenshots/3636353/dribbble.jpg"}}/>
{/* 
                    <Avatar rounded source={{uri: auth?.currentUser?.photoUrl}}/> */}
                </TouchableOpacity>
                </View>
            ),
             headerRight: () => (
                 <View style={{
                     marginRight: 20,
                     flexDirection: "row",
                     justifyContent: "space-between",
                     width: 80,
                 }}>
                    <TouchableOpacity activeOpacity={ 0.5}>
                         <AntDesign name="camerao" size={24} color="black" />
                     </TouchableOpacity>
                      <TouchableOpacity activeOpacity={ 0.5}>
                         <AntDesign name="pencil" size={24} color="black" />
                     </TouchableOpacity>
                </View>
             )

        })
    },[navigation])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;
