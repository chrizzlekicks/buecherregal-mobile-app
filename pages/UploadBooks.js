import React, { useState } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
} from 'react-native'
import { useGlobalContext } from '../context/GlobalContext'

const UploadBooks = () => {
  const [name, setName] = useState()
  const [author, setAuthor] = useState()
  const [genre, setGenre] = useState()
  const [language, setLanguage] = useState()
  const [condition, setCondition] = useState()
  const [desc, setDesc] = useState()

  const { setLoading, setAlert, API_BOOKS, userId, jwt } = useGlobalContext()

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
          owner: userId,
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

  const uploadAll = (e) => {
    e.preventDefault()
    bookUpload(API_BOOKS, jwt)
  }

  // resette die komplette Eingabe
  const resetInput = () => {
    setName()
    setAuthor()
    setGenre()
    setLanguage()
    setCondition()
    setDesc()
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Lade hier dein Buch hoch</Text>
      <TouchableOpacity style={styles.imageUpload}></TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder='Titel des Buches'
        onChangeText={setName}
        name='name'
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder='AutorIn des Buches'
        onChangeText={setAuthor}
        name='author'
        value={author}
      />
      <TextInput
        style={styles.input}
        placeholder='Genre des Buches'
        onChangeText={setGenre}
        name='genre'
        value={genre}
      />
      <TextInput
        style={styles.input}
        placeholder='Sprache des Buches'
        onChangeText={setLanguage}
        name='language'
        value={language}
      />
      <TextInput
        style={styles.input}
        placeholder='Zustand des Buches'
        onChangeText={setCondition}
        name='condition'
        value={condition}
      />
      <TextInput
        style={styles.input}
        placeholder='Zustand des Buches'
        onChangeText={setDesc}
        name='desc'
        value={desc}
      />
      <TouchableOpacity style={styles.btn} onPress={uploadAll}>
        <Text style={styles.btnText}>Hochladen</Text>
      </TouchableOpacity>
      <Button onPress={resetInput} title='Eingaben löschen' color='#ccc' />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  title: {
    textAlign: 'center',
  },
  imageUpload: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    backgroundColor: '#b00055',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#b00055',
    padding: 10,
  },
  btnText: {
    color: '#fff',
  },
})

export default UploadBooks
