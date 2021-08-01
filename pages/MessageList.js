import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'

import Conversation from "../components/Conversation"

const conversations = [
  {_id: 1, recipients:"Tom", messages: [{sender: "Tom",  message:"Ich gehe nachher noch..."}, {sender: "Ich",  message:"Ich auch"}, {sender: "Tom",  message:"Das freut mich"}, {sender: "Tom",  message:"Ich gehe nachher noch..."}, {sender: "Ich",  message:"Ich auch"}, {sender: "Tom",  message:"Das freut mich"}, {sender: "Tom",  message:"Ich gehe nachher noch..."}, {sender: "Ich",  message:"Ich auch"}, {sender: "Tom",  message:"Das freut mich"},]},
  {_id: 2, recipients:"Tim", messages: [{sender: "Tom",  message:"Ich gehe nachher noch..."}, {sender: "Ich",  message:"Ich auch"}, {sender: "Tom",  message:"Das freut mich"},]},
  {_id: 3, recipients:"Tina", messages: [{sender: "Ich", message:"Ok"}]},
  {_id: 4, recipients:"Trudy", messages: [{sender: "Trudy",  message:"Das kann ich dir sagen!"}]},
]



const MessageList = ({navigation}) => {
 
  return (
    <ScrollView style={style.container} >
        {conversations.map(conversation => {
            return <Conversation nav={navigation} conversation={conversation} /> })
        }
    </ScrollView>
  );
};


const style = StyleSheet.create ({

  container: {
    paddingTop: 30,
    paddingHorizontal: 20,

  }
})

export default MessageList;

