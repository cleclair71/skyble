import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Weather from './index'; // Assuming this is where your WeatherApp component is
import Two from './two.tsx'; // The second tab

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Weather">
      <Tab.Screen name="Weather" component={Weather} />
      <Tab.Screen name="Two" component={Two} />
    </Tab.Navigator>
  );
}

export default TabNavigator;