import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Modal, Image } from 'react-native';
import SwipeRender from 'react-native-swipe-render';
import Weather from './index';
import Two from './two.tsx';
import ModalScreen from '../modal.tsx'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 

function TabNavigator() {
  const animatedIndex = useRef(new Animated.Value(0)).current;

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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* Add the Search Icon */}
      <TouchableOpacity 
        style={styles.searchIconContainer}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="search" size={30} color="black" />  {/* Use the FontAwesome search icon */}
      </TouchableOpacity>

      {/* Render the Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ModalScreen close={() => setModalVisible(false)} />
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
        <Weather />
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
    top: 10, // or adjust as needed
    right: 10, // or adjust as needed
    zIndex: 10, 
    padding: 10, // makes it easier to tap
  },
  searchIcon: {
    width: 30,  // adjust size as needed
    height: 30, // adjust size as needed
    resizeMode: 'contain',
  }
});

export default TabNavigator;