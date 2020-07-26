import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import screens
import TodoDetailScreen from './TodoDetail';
import AllTodoScreen from './AllTodo';
import AddTodo from './AddTodo';

const Stack = createStackNavigator();

export default All = () => {
    return(
      <Stack.Navigator initialRouteName='AllTodoScreen'>
          <Stack.Screen
              name="TodoDetailScreen"
              component={TodoDetailScreen}
              options={{ title: 'Todo Detail' }}
          />
          <Stack.Screen
              name="AllTodoScreen"
              component={AllTodoScreen}
              options={{ title: 'All Todo' }}
          />
          <Stack.Screen
              name="AddTodoScreen"
              component={AddTodo}
              options={{ title: 'Add Todo' }}
          />
      </Stack.Navigator>
    )
}