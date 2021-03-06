import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {useStore} from "../store";
const Login = ()=>  {
    const [password,setPassword] = useState();
    const {
        username,
        setUsername,
        login,
        signUp
    } = useStore();
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>trainder</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Username...."
                    placeholderTextColor="white"
                    onChangeText={userName => setUsername(userName)}/>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="white"
                    onChangeText={passWord => setPassword(passWord)}/>
            </View>
            <TouchableOpacity
                onPress={()=>login(username,password) }
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>signUp(username,password) }>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    inputView:{
        backgroundColor:"#465881",
        borderRadius:20,
        height:60,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        flex: 1,
        height:60,
        color:"white",
        width:"80%"
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    }
});


export default Login