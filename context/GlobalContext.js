import React, { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const API_BOOKS = 'http://buecherregal-dev.herokuapp.com/api/books/'
  const API_USERS = 'http://buecherregal-dev.herokuapp.com/api/users/'
  const API_BOOKSBYUSER =
    'http://buecherregal-dev.herokuapp.com//api/books/user/'
  const API_MESSAGES = 'http://buecherregal-dev.herokuapp.com//api/messages/'
  const API_MESSAGESUSER =
    'http://buecherregal-dev.herokuapp.com/api/messages/user/'
  const [userName, setUserName] = useState()
  const [userId, setUserId] = useState()
  const [jwt, setJwt] = useState()
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ display: false, icon: '', msg: '' })
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [showLinks, setShowLinks] = useState(false)
  const [selectedConversation, setSelectedConversation] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)

  // schließe das Usermenu rechts oben
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  // klappe das Navigationsmenu ein nach Klicken eines Links
  const hideLinks = () => {
    if (showLinks) {
      setShowLinks(false)
    }
  }

  // speichere APIs, states und functions in einer globalen Variable
  const globalValues = {
    API_BOOKS,
    API_USERS,
    API_BOOKSBYUSER,
    API_MESSAGES,
    API_MESSAGESUSER,
    isUserLoggedIn,
    setIsUserLoggedIn,
    loading,
    setLoading,
    alert,
    setAlert,
    closeSubmenu,
    userName,
    userId,
    jwt,
    isSubmenuOpen,
    setIsSubmenuOpen,
    selectedConversation,
    setSelectedConversation,
    isMessageSent,
    setIsMessageSent,
    showLinks,
    setShowLinks,
    hideLinks,
    setUserId,
    setUserName,
    setJwt,
  }

  return (
    <AppContext.Provider value={globalValues}>{children}</AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
