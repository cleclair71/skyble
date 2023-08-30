import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { weatherConditions } from '../../utils/WeatherConditions';
import * as Location from 'expo-location';
import { getCurrentTime, getTimeOfDay, getSeason } from '../../utils/dateUtils';

const API_KEY = '849338767c0e95025b5559533d26b7c4';

const Weather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('day');  // Default to day
  const [season, setSeason] = useState('summer');     // Default to summer
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);
  const [city, setCity] = useState('');
  const { time, date, month, weekday } = currentTime;
  const position = useState(new Animated.Value(0))[0];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchWeather(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  useEffect(() => {
    const animateImage = () => {
      Animated.sequence([
        Animated.timing(position, {
          toValue: -50,
          duration: 5000,
          useNativeDriver: false
        }),
        Animated.timing(position, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: false
        }),
        Animated.delay(1000)  
      ]).start(() => animateImage());
    }

    animateImage();
  }, []);


  const fetchWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(json => {
        setTemperature(json.main.temp);
        setWeatherCondition(json.weather[0].main);
        setCity(json.name);
        setIsLoading(false);
      });
  }

  const background = weatherCondition ? weatherConditions[weatherCondition].backgroundImage[season][timeOfDay] : null;

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Fetching The Weather</Text>
      </View>
    );
  }

  if (weatherCondition) {
    return (
      <View style={styles.mainContainer}>
        <AnimatedImageBackground
          source={background}
          style={[styles.weatherContainer, { left: position }]}
        />
        {/* The text is now outside the AnimatedImageBackground */}
        <View style={styles.headerContainer}>
          <Text style={styles.cityName}>{city}</Text>
          <Text style={styles.dateText}>
            <Text style={{ fontWeight: 'normal' }}>{date} {month}, </Text>
            <Text style={{ fontWeight: 'bold' }}>{weekday}</Text>
          </Text>
          <Text style={styles.tempText}>{Math.round(temperature)}˚</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Oh no, something went wrong</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  weatherContainer: {
    flex: 1,
    height: '100%',
    width: '200%',
    position: 'absolute', 
    top: 0,
  },
  headerContainer: {
    top: 80,
    left: 40,
    alignItems: 'flex-start',  // Corrected from 'left' to 'flex-start'
  },
  tempText: {
    fontSize: 160,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  },
  timeText: {
    fontSize: 30,
    color: '#fff'
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left'
  },
  dateText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left'
  }
});

export default Weather;