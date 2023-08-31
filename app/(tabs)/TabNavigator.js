import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Modal } from 'react-native';
import SwipeRender from 'react-native-swipe-render';
import Weather from './index';
import Two from './two.tsx';
import ModalScreen from '../modal.js';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const TabNavigator = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [latLon, setLatLon] = useState(null);
  const [city, setCity] = useState('');
  const animatedIndex = useRef(new Animated.Value(0)).current; // Added this ref for animatedIndex

  const animateDot = (targetIndex) => {
    Animated.timing(animatedIndex, {
      toValue: targetIndex,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const firstDotColor = animatedIndex.interpolate({
    inputRange: [0, 1],
    outputRange: ['blue', 'gray'],
  });

  const secondDotColor = animatedIndex.interpolate({
    inputRange: [0, 1],
    outputRange: ['gray', 'blue'],
  });

  const fetchCurrentWeather = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLatLon({ lat: location.coords.latitude, lon: location.coords.longitude });
    console.log(location.coords.latitude, location.coords.longitude);
  };
return (
  <View style={styles.container}>
    <TouchableOpacity 
      style={[styles.searchIconContainer, { right: 60 }]} // Move it to the left of the search icon
      onPress={fetchCurrentWeather}
    >
      <MaterialIcons name="my-location" size={24} color="rgba(255,255,255,0.5)"/>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.searchIconContainer}
      onPress={() => setModalVisible(true)}
    >
      <MaterialIcons name="search" size={24} color="rgba(255,255,255,0.5)"/>
    </TouchableOpacity>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
<ModalScreen 
   close={() => setModalVisible(false)} 
   fetchWeatherByCity={(cityName) => { /* Reference to Weather's fetchWeatherByCity function */ }} 
/>
    </Modal>

    <SwipeRender
      index={0}
      loop={false}
      loadMinimal={true}
      loadMinimalSize={2}
      horizontal={true}
      onChangeIndex={(index) => {
        animateDot(index);
      }}
    >
      <Weather latLon={latLon} city={city} />
      <Two />
    </SwipeRender>

    <View style={styles.dotsContainer}>
      <Animated.View style={[styles.dot, { backgroundColor: firstDotColor }]} />
      <Animated.View style={[styles.dot, { backgroundColor: secondDotColor }]} />
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
dotsContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 25,
},
dot: {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 5,
},
searchIconContainer: {
  position: 'absolute',
  top: 50, 
  right: 12, 
  zIndex: 10, 
  paddingRight: 30, 
}
});

export default TabNavigator;