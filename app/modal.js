import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BlurView } from 'expo-blur';

export default function ModalScreen(props) {
  const translateY = new Animated.Value(0);

  const handleGesture = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: false }
  );

  const handleStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();

      if (event.nativeEvent.translationY > 100) {
        props.close();  
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={handleGesture}
      onHandlerStateChange={handleStateChange}
    >
      <BlurView
        intensity={50}  
        tint="light"  
        style={{ flex: 1 }}
      >
        <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
          <Text style={styles.title}>City Search</Text>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <EditScreenInfo onCitySelect={props.fetchWeatherByCity} path="app/modal.js" />
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </Animated.View>
      </BlurView>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    marginTop: 80,
    backgroundColor: 'rgba(255,255,255,0.0.1)',  
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20,

  },
  // separator: {
  //   marginVertical: 20,
  //   height: 1,
  //   width: '100%',
  // },
});
