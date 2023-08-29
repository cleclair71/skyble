import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwipeRender from 'react-native-swipe-render';
import Weather from './index'; // Assuming this is where your WeatherApp component is
import Two from './two.tsx'; // The second tab

function TabNavigator() {
  return (
    <SwipeRender
        // OPTIONAL PROP USAGE.
        index={0} // start from the first view
        loop={false} // disable looping
        loadMinimal={true}
        loadMinimalSize={2}
        horizontal={true}
    >
        <Weather />
        <Two />
    </SwipeRender>
  );
}

export default TabNavigator;