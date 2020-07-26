import React, {Component} from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import Theme from '../Theme/Color';

export default class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    const status = {
                        backgroundColor: item.status == 'Done' ? Theme.COLORS.ACTIVE : Theme.COLORS.DEFAULT
                    }
                    return(
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('TodoDetailScreen', {data: item})}} style={[styles.todo, status]}>
                            <Text style={styles.todoContent}>{item.body}</Text>
                        </TouchableOpacity>
                    )
                }}
            ></FlatList>
        )
    }
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