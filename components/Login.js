import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { set } from "react-native-reanimated";

import { useAuthContext } from '../context/AuthContext';

function Login() {

    console.log(useAuthContext())

    const { loginNow, email, password, setEmail, setPassword  } = useAuthContext();
      
    return (
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <View style={styles.centeredView}>
                <View style={styles.textInputContainer} >
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="email"
                        name="email"
                        key= "email"
                        onChangeText={setEmail}
                        value={email}
                        />
                </View>
                <View style={styles.textInputContainer} >
                    <TextInput 
                        style={styles.textInput}
                        secureTextEntry={true} 
                        placeholder="password" 
                        name='password'
                        key='password'
                        value={password}
                        onChangeText={setPassword}
                        required
                        />
                </View>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={loginNow}
                    >
                    <Text style={styles.textStyle}>Login</Text>
                </Pressable>
            </View>
        </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent:"center",
      alignItems: "center",
      marginTop: 22
    },
    
    button: {
        width: 100,
        marginTop: 10,
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#B00055",
    },
    textInputContainer: {
        height:40,
        width: 300,

        marginVertical: 10,
        paddingHorizontal: 5,

        borderWidth: 1,
        borderRadius: 20,
    },

    textInput: {
       fontSize: 14,
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  


export default Login