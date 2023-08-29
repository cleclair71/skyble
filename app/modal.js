import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BlurView } from '@react-native-community/blur';

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
        intensity={100}  // adjust this value for desired blur intensity
        tint="light"  // can be 'light', 'default', or 'dark'
        style={{ flex: 1 }}
      >
        <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
          <Text style={styles.title}>Modal</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/modal.js" />
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
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',  // semi-transparent white
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
