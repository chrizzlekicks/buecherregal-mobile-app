import * as React from 'react'
import {View, Text, Button} from 'react-native'

const MyBooks = ({ navigation }) => {
 
  return (
    <View>
      <Text>MyBooks</Text>
      <Button title="Upload Book" onPress={() => navigation.navigate("UploadBook")}  />
    </View>
  );
};

export default MyBooks;