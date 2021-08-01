import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { useGlobalContext } from '../context/GlobalContext';
import { useMessageContext } from '../context/MessageContext';

function Conversation(props) {

const { _id, recipients, messages} = props.conversation
const { userName, userId, jwt, API_MESSAGES } = useGlobalContext();
const { setConfId, setSelectedConversation,
    fetchMessages,} = useMessageContext();

    return(
        <TouchableOpacity onPress={() =>{ 
            props.nav.navigate("Chat", {conversation: props.conversation})
            setSelectedConversation(true)
            fetchMessages(API_MESSAGES, _id, jwt, userId)
            setConfId(_id)
            }
            }>
            <View style= {styles.container}>
                <Ionicons name="person-circle-outline" style={styles.profilePicture} />
                <View style= {styles.textContainer}>
                    <Text style= {styles.userName}> 
                        {userName === recipients[0].name
                        ? recipients[1].name
                        : recipients[0].name}
                    </Text>
                    <Text style= {styles.message}>
                        {`${messages[messages.length - 1].sender === recipients[0]._id
                        ? recipients[0].name
                        : recipients[1].name} : ${messages[messages.length - 1].message}`}
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
        marginTop: 20,
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
        justifyContent:"center"
    }

})

export default Conversation
