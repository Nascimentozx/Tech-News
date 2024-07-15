import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/components/HomeScreen';
import DetailsScreen from '@/components/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
         options={{
            title: 'Tech News',
            headerStyle: { backgroundColor: '#AADDEE' },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
           />
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={{
            title: 'Noticias',
            headerStyle: { backgroundColor: '#AADDEE' },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      </Stack.Navigator>
  );
}
