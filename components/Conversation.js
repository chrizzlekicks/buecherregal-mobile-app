import React from "react"
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

function Conversation(props) {

const { _id, recipients, messages} = props.conversation

    return(
        <TouchableOpacity onPress={() => props.nav.navigate("Chat", {conversation: props.conversation})}>
            <View style= {styles.container}>
                <Ionicons name="person-circle-outline" style={styles.profilePicture} />
                <View style= {styles.textContainer}>
                    <Text style= {styles.userName}> 
                        {recipients}
                    </Text>
                    <Text style= {styles.message}>
                        {`${messages[messages.length - 1].sender} : ${messages[messages.length-1].message}`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",

        height: 50,
        marginBottom: 20,
        paddingBottom: 10,

        borderBottomWidth: 1,
        borderColor: "#737373",
    },

    textContainer:{
        paddingHorizontal: 15,
    },

    profilePicture: {
        paddingLeft: 15,
        fontSize: 40,
    },

    userName: {
        fontSize: 16,
        fontWeight: "bold",
    },

    message: {
        fontSize: 14,
    }

})

export default Conversation