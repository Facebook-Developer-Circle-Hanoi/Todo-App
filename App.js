import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import screens
import CompleteScreen from './src/screens/Complete';
import AllScreen from './src/screens/All';
import ActiveScreen from './src/screens/Active';

//import components
import IconTab from './src/components/IconTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='All' tabBarOptions={{showLabel: false}} screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if(route.name == 'Home') {
            return (<IconTab src='https://i.imgur.com/yKGo8LE.png'></IconTab>)
          } else if(route.name == 'Active'){
            return (<IconTab src='https://i.imgur.com/NE1T6A9.png'></IconTab>)
          } else {
            return (<IconTab src='https://i.ibb.co/pnh5fNg/dashboard.png'></IconTab>)
          }
        }
      })}>
        <Tab.Screen options={{title: 'Complete'}} name='Home' component={CompleteScreen}/>
        <Tab.Screen options={{title: 'All'}} name='All' component={AllScreen}/>
        <Tab.Screen options={{title: 'Active'}} name='Active' component={ActiveScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
