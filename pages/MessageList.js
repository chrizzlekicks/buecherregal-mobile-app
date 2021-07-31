import React from 'react'
import {View, Text, Button} from 'react-native'

const MessageList = ({navigation}) => {
 
  return (
    <View>
      <Text>MessageList</Text>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")}  />
    </View>
  );
};

export default MessageList;