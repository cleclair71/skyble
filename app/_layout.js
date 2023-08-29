import React, { useEffect } from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';

import ModalScreen from './modal.tsx';
import TabNavigator from './(tabs)/TabNavigator.js';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootLayoutNav />
  );
}

const StackNavigator = createStackNavigator();

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StackNavigator.Navigator initialRouteName="(tabs)">
        <StackNavigator.Screen name="(tabs)" component={TabNavigator} options={{ headerShown: false }} />
        <StackNavigator.Screen name="modal" component={ModalScreen} options={{ presentation: 'modal' }} />
      </StackNavigator.Navigator>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});