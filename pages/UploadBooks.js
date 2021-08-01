import React, { useState } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
} from 'react-native'

const UploadBooks = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    language: '',
    condition: '',
    desc: '',
  })

  const deleteInput = () => {
    setNewBook({
      title: '',
      author: '',
      genre: '',
      language: '',
      condition: '',
      desc: '',
    })
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Lade hier dein Buch hoch</Text>
      <TouchableOpacity style={styles.imageUpload}></TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder='Titel des Buches'
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        value={newBook.title}
      />
      <TextInput
        style={styles.input}
        placeholder='AutorIn des Buches'
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        value={newBook.author}
      />
      <TextInput
        style={styles.input}
        placeholder='Genre des Buches'
        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        value={newBook.genre}
      />
      <TextInput
        style={styles.input}
        placeholder='Sprache des Buches'
        onChange={(e) => setNewBook({ ...newBook, language: e.target.value })}
        value={newBook.language}
      />
      <TextInput
        style={styles.input}
        placeholder='Zustand des Buches'
        onChange={(e) => setNewBook({ ...newBook, condition: e.target.value })}
        value={newBook.condition}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Hochladen</Text>
      </TouchableOpacity>
      <Button onPress={deleteInput} title='Eingaben löschen' color='#ccc' />
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
