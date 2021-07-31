import * as React from 'react'
import {View, Text, Button} from 'react-native'

const Marketplace = ({ navigation }) => {
 
  return (
    <View>
      <Text>Marketplace!</Text>
      <Button title="Open Book" onPress={() => navigation.navigate("OpenBook")}  />
    </View>
  );
};

export default Marketplace;