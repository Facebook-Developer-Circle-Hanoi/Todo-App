import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import components
import TodoButton from '../components/TodoButton';

export default TodoDetail = (props) => {
    const [data, setData] = useState(props.route.params.data);

    const update = async () => {
      fetch(`https://getinsvn.com/api/todo/update.php`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          id: data.id
        })
      })
      .then(async response => {
        const dataApi = await response.json();
        setData({
          'id': data.id,
          'serial': data.serial,
          'status': dataApi.status,
          'body': data.body,
        });
      })
      .catch(error => {
        console.log(error);
      })
    }

    return (
      <View style={styles.container}>
        <Text style={styles.status}>{`${data.status}`}</Text>
        <Text style={styles.content}>{data.body}</Text>
        <TodoButton content={data.status == 'Done' ? 'Active' : 'Done'} onPress={() => update()}></TodoButton>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15
    },
    status: {
      fontSize: 26
    },
    content: {
      fontSize: 20,
      textAlign: "justify"
    }
  });