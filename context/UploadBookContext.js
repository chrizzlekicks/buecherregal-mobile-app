import React, { createContext, useContext, useState } from 'react'
import { useGlobalContext } from './GlobalContext'

const UploadBookContext = createContext()

export const UploadBookProvider = ({ children }) => {
  const [name, setName] = useState()
  const [author, setAuthor] = useState()
  const [genre, setGenre] = useState()
  const [language, setLanguage] = useState()
  const [condition, setCondition] = useState()
  const [desc, setDesc] = useState()
  const { setLoading, setAlert, API_BOOKS, userId, jwt } = useGlobalContext()

  // POST Buch
  const bookUpload = async (api, token) => {
    try {
      setLoading(true)
      const res = await fetch(api, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          author: author,
          genre: genre,
          language: language,
          condition: condition,
          desc: desc,
        }),
      })
      if (res.ok) {
        await res.json()
        setLoading(false)
        setAlert({
          display: true,
          // icon: <FaCheckCircle />,
          msg: 'Das Buch wurde erfolgreich hinzugefügt',
        })
      } else {
        throw new Error('Hoppala, da ist was schief gegangen')
      }
    } catch (error) {
      console.log('Hochladen fehlgeschlagen', error)
      setLoading(false)
      setAlert({
        display: true,
        // icon: <FaPoo />,
        msg: 'Das hat irgendwie nicht geklappt...',
      })
    } finally {
      setName()
      setAuthor()
      setGenre()
      setLanguage()
      setCondition()
      setDesc()
    }
  }

  // Bilddatei hinzufügen
  const imageChange = (e) => {
    setBookImage(e.target.files[0])
  }

  // Buch hochladen
  const uploadAll = (e) => {
    e.preventDefault()
    bookUpload(API_BOOKS, jwt)
  }

  // resette die komplette Eingabe
  const resetInput = () => {
    setBookImage()
    setNewBook({
      name: '',
      author: '',
      genre: '',
      language: '',
      condition: '',
      owner: userId,
      desc: '',
    })
  }

  // speichere states und functions in Variable
  const uploadValues = {
    newBook,
    bookImage,
    textChange,
    imageChange,
    uploadAll,
    resetInput,
  }

  // gebe Variable an children weiter
  return (
    <UploadBookContext.Provider value={uploadValues}>
      {children}
    </UploadBookContext.Provider>
  )
}

// custom hook
export const useUploadBookContext = () => {
  return useContext(UploadBookContext)
}
