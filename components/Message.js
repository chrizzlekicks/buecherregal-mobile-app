import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

function Message({ recipients, message, sender }) {
  return (
    <View>
      <View style={sender === 'Ich' ? styles.container_ : styles.container}>
        <Ionicons name='person-circle-outline' style={styles.profilePicture} />
        <View
          style={
            sender === 'Ich' ? styles.textContainer_ : styles.textContainer
          }
        >
          <Text style={styles.userName}>
            {sender === recipients[0]._id
              ? recipients[0].name
              : recipients[1].name}
          </Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  container_: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    height: 50,
    marginBottom: 5,
    paddingHorizontal: 15,
  },

  textContainer: {
    paddingHorizontal: 15,
  },

  textContainer_: {
    alignItems: 'flex-end',

    paddingHorizontal: 10,
  },

  profilePicture: {
    fontSize: 45,
  },

  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B00055',
  },

  message: {
    fontSize: 14,
  },
})

export default Message
