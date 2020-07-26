import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
// import components
import TodoButton from '../components/TodoButton';

export default TodoDetail = ({ navigation }) => {
  const [content, setContent] = useState('');

  const addTodo = async () => {
    fetch(`https://getinsvn.com/api/todo/add.php`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        content: content
      })
    })
    .then(async response => {
      const data = await response.json();
      setContent('');
      Alert.alert('ADD TO-DO LIST SUCCESS');
    })
    .catch(error => {
      console.log(error);
      Alert.alert('ADD TO-DO LIST FAIL');
    })
  }

  const warning = () => {
    Alert.alert('YOU NEED TO WRITE SOMETHING');
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={text => setContent(text)} value={content} style={[styles.input, styles.shadow]} placeholder="Your to-do list here"></TextInput>
      <TodoButton content='SUBMIT' onPress={() => {content != '' ? addTodo() : warning()}}></TodoButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 20
  },
  input: {
    height: 45,
    borderRadius: 8,
    marginTop: 20,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff'
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  }
  });