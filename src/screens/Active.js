import React, {useState} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//import components
import TodoList from '../components/TodoList';

const Stack = createStackNavigator();

export default Active = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Active' component={ActiveScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

const ActiveScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(`https://getinsvn.com/api/todo/read-all.php?s=Active`)
    .then(async response => {
      const data = await response.json();
      setData(data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  getData();

  return (
    <View style={styles.container}>
      <TodoList data={data} navigation={navigation}></TodoList>
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
      marginBottom: 10,
      padding: 10,
      justifyContent: "center"
  },
  todoContent: {
      fontSize: 20,
      color: "#eaeaea"
  }
});