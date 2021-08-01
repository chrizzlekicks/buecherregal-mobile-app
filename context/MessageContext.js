import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import { FaFlushed } from 'react-icons/fa'
import { useGlobalContext } from '../context/GlobalContext'

const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
  const [conversations, setConversations] = useState([])
  const [chat, setChat] = useState([])

  const [newMessage, setNewMessage] = useState('')
  const [newSender, setNewSender] = useState('')
  const [newReciver, setNewReciver] = useState('')

  const [confId, setConfId] = useState('')
  const scrollToBottom = useRef()
  const {
    isMessageSent,
    setIsMessageSent,
    selectedConversation,
    setSelectedConversation,
    setLoading,
    userId,
    jwt,
    API_MESSAGESUSER,
    API_MESSAGES,
    setAlert,
  } = useGlobalContext()

  // GET Konversationen vom Backend
  const fetchUserConversations = useCallback(
    async (api_messages_user, user_id, token) => {
      try {
        setLoading(true)
        const res = await fetch(`${api_messages_user}${user_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (res.ok) {
          let data = await res.json()
          const convList = data.reverse()
          setConversations(convList)
        } else {
          throw new Error('conversations could not be fetched')
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    },
    [setConversations, setLoading]
  )

  // GET alle Nachrichten einer Konversation
  const fetchMessages = useCallback(
    async (api_messages, conv_id, token, user_id) => {
      console.log(api_messages, conv_id, token, user_id)
      if (selectedConversation) {
        try {
          setLoading(true)
          const res = await fetch(`${api_messages}${conv_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          if (res.ok) {
            const singleConv = await res.json()
            setChat(singleConv)
            setNewSender(user_id)
            setNewReciver(
              user_id === singleConv.recipients[0]._id
                ? singleConv.recipients[1]._id
                : singleConv.recipients[0]._id
            )
            setNewMessage('')
            scrollToBottom.current.scrollIntoView({
              block: 'end',
              behavior: 'smooth',
            })
          } else {
            throw new Error(
              'could not get the conversation you are looking for'
            )
          }
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
          setIsMessageSent(false)
        }
      }
      return null
    },
    [selectedConversation, setLoading, setIsMessageSent]
  )

  // POST Nachricht in bestehende Konversation
  const postMessage = async (api_messages, conv_id, token, message) => {
    try {
      setLoading(true)
      const res = await fetch(`${api_messages}${conv_id}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(message),
      })

      if (res.ok) {
        await res.json()
        console.log('worked')
      } else {
        throw new Error('Nachricht konnte nicht verschickt werden')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      setNewMessage('')
      setNewReciver('')
      setNewSender('')
    }
  }

  // ziehe alle Konversationen eines Users
  useEffect(() => {
    fetchUserConversations(API_MESSAGESUSER, userId, jwt)
  }, [
    API_MESSAGESUSER,
    fetchUserConversations,
    isMessageSent,
    setIsMessageSent,
    userId,
    jwt,
  ])

  // update die Nachrichten
  useEffect(() => {
    fetchMessages(API_MESSAGES, confId, jwt, userId)
  }, [isMessageSent, API_MESSAGES, fetchMessages, jwt, userId])

  // rufe eine Konversation und die dazugehörigen Nachrichten auf
  const openConversation = () => {
    setSelectedConversation(true)
  }

  // // Nachrichteneingabe
  // const handleMessage = (e) => {
  //   setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  // };

  // schicke die Nachricht ab
  const sendMessage = () => {
    if (!selectedConversation) {
      setAlert({
        display: true,
        //icon: <FaFlushed />,
        msg: 'Du hast keine Konversation ausgewählt!',
      })
      console.log('didnt work')
      return null
    }
    const assembledMessage = {
      sender: newSender,
      reciever: newReciver,
      message: newMessage,
    }
    console.log('worked', assembledMessage)
    // postMessage(API_MESSAGES, chat._id, jwt, assembledMessage);

    // setIsMessageSent(true);
  }

  // // schicke die Nachricht per Enter ab
  // const handleKeyPress = (e) => {
  //   if (e.charCode === 13) {
  //     sendMessage(e);
  //   }
  // };

  // speichere states & functions in Variable
  const messageValues = {
    conversations,
    chat,
    newMessage,
    setNewMessage,
    setNewSender,
    setNewReciver,
    selectedConversation,
    scrollToBottom,
    openConversation,
    setSelectedConversation,
    fetchMessages,
    sendMessage,
    setConfId,
    //handleMessage,
    //handleKeyPress,
  }

  return (
    <MessageContext.Provider value={messageValues}>
      {children}
    </MessageContext.Provider>
  )
}

export const useMessageContext = () => {
  return useContext(MessageContext)
}
