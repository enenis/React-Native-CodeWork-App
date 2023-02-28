import React from 'react'
import { View,Text } from 'react-native'
import Config from "react-native-config";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './src/pages/JobsPage';
import { Provider } from "react-redux";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from './src/pages/Detail';
import { createStore } from "redux";
import reducers from './src/context/reducers';
import store from './src/context/store';
import Favorite from './src/pages/Favorite';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function Router(){
  return(
    
      <Tab.Navigator>
        <Tab.Screen name='JobsPage' component={Jobs} />
        <Tab.Screen name='FavoriteJobs' component={Favorite} />
      </Tab.Navigator>
    
  )
}

export default function App( ) {
  return (
    <Provider store={createStore(reducers,store)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Router"
          component={Router}
          options={{ headerShown: false }}
          />
          <Stack.Screen name="DetailJobs" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  }
