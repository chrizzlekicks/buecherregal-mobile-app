import React from 'react'
import {ScrollView, StyleSheet, Text} from 'react-native'
import { useMessageContext } from '../context/MessageContext';

import Conversation from '../components/Conversation'



// [
//   {_id: 1, recipients:"Tom", messages: [{sender: "Tom",  message:"Ich gehe nachher noch..."}, {sender: "Ich",  message:"Ich auch"}, {sender: "Tom",  message:"Das freut mich"}, {sender: "Tom",  message:"Ich gehe nachher noch..."}, {sender: "Ich",  message:"Ich auch"}, {sender: "Tom",  message:"Das freut mich"}, {sender: "Tom",  message:"Ich gehe nachher noch..."}, {sender: "Ich",  message:"Ich auch"}, {sender: "Tom",  message:"Das freut mich"},]},
//   {_id: 2, recipients:"Tim", messages: [{sender: "Tom",  message:"Ich gehe nachher noch..."}, {sender: "Ich",  message:"Ich auch"}, {sender: "Tom",  message:"Das freut mich"},]},
//   {_id: 3, recipients:"Tina", messages: [{sender: "Ich", message:"Ok"}]},
//   {_id: 4, recipients:"Trudy", messages: [{sender: "Trudy",  message:"Das kann ich dir sagen!"}]},
// ]



const MessageList = ({navigation}) => {
 
  console.log(useMessageContext())
  const { conversations } = useMessageContext()
  console.log( "conversations")

  return (
    <ScrollView style={style.container} >
        {conversations.map(conversation => {
            return <Conversation nav={navigation} key={conversation._id} conversation={conversation} /> })
        }
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
})

export default MessageList
