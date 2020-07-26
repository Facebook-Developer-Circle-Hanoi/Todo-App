import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import Theme from '../Theme/Color';
// import components
import TodoButton from '../components/TodoButton';
import TodoList from '../components/TodoList';

export default AllTodo = ({ navigation }) => {
  const [data, setData] = useState([]);

  fetch(`https://getinsvn.com/api/todo/read-all.php`)
  .then(async response => {
    const data = await response.json();
    setData(data);
  })
  .catch(error => {
    console.log(error);
  })

  return (
  <View style={styles.container}>
      <TodoList data={data} navigation={navigation}></TodoList>
      <TodoButton content='ADD NEW TODO' onPress={() => {navigation.navigate('AddTodoScreen');}}></TodoButton>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eeeeee',
      paddingHorizontal: 20,
      paddingTop: 20
    },
    todo: {
        borderRadius: 8,
        maxHeight: 80,
        marginBottom: 15,
        padding: 10,
        justifyContent: "center"
    },
    todoContent: {
        fontSize: 20,
        color: "#eaeaea"
    },
    shadow: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 0.05,
      elevation: 2,
    },
});