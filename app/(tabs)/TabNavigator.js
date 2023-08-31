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

  const handleCityUpdate = (cityName) => {
    setCity(cityName);
  }

  const fetchWeatherByCity = async (cityName) => {
    setCity(cityName);
    
    const API_KEY = '849338767c0e95025b5559533d26b7c4';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.coord) {
        setLatLon({ lat: data.coord.lat, lon: data.coord.lon });
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

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
        style={[styles.searchIconContainer, { right: 60 }]} 
        onPress={fetchCurrentWeather}
      >
        <MaterialIcons name="my-location" size={24} color="rgba(255,255,255,0.5)" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.searchIconContainer}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="search" size={24} color="rgba(255,255,255,0.5)" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ModalScreen close={() => setModalVisible(false)} onCitySelect={fetchWeatherByCity} />
      </Modal>

      <SwipeRender
        index={0}
        loop={false}
        loadMinimal={true}
        loadMinimalSize={2}
        horizontal={true}
        showsPagination={true}
      >
        <Weather latLon={latLon} city={city} />
        <Two />
      </SwipeRender>
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