import React, {useEffect, useRef} from 'react'
import {StyleSheet, ScrollView, TextInput, TouchableOpacity, View, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Message from '../components/Message';
import { useMessageContext } from '../context/MessageContext';


const Chat = ({route}) => {
 
  const { _id, recipients, messages} = route.params.conversation
  const scrollRef = useRef()


  useEffect(() => {
    scrollRef.current.scrollToEnd()}, [])
    const { sendMessage, newMessage, setNewMessage, setNewSender, setNewReciver} = useMessageContext();

    setNewSender(recipients[0])
    setNewReciver(recipients[1])

  return (    
    <View style={styles.container}>
      <ScrollView 
        ref ={scrollRef} 
        contentContainerStyle={{ flexGrow: 1,}} >
        <View style={styles.messageContainer}>
          {messages.map(message => <Message key={message._id} recipients={recipients} {...message} />)}
        </View>
      </ScrollView>
      <View style= {styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput 
            name= {_id} 
            value= {newMessage} 
            multiline={true} 
            style={styles.input} 
            onFocus={() => {scrollRef.current.scrollToEnd()}}
            onChangeText={setNewMessage} />
        </View>
          <TouchableOpacity 
            style={styles.buttonBackground} 
            onPress={() => {
              sendMessage()
            }} >
              <Ionicons name="paper-plane" style={styles.button} />
          </TouchableOpacity>
      </View>
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  container:{ 
    flex:1  , 
    padding: 10,
  },
  messageContainer: {
    flex: 12,
    justifyContent: "flex-end"
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  inputContainer: {
    maxHeight: 95,
    width: 300,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 23,
  },

  input: {
    fontSize: 17,
    color: "#000"
  },

  button: {
    fontSize: 30,
    color: "#fff",
  },
  buttonBackground: {
    justifyContent:  "center",
    alignItems: "center",

    height: 45,
    width: 45,


    borderRadius: 23,
    backgroundColor: "#B00055",
  }

})
export default Chat;