import { React, useState, useEffect } from 'react';  
import { View, Image, ImageBackground, StyleSheet, Animated } from 'react-native';

const LoadingComponent = () => {
    const [dotAnimation, setDotAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        const animateDots = () => {
            Animated.sequence([
                Animated.timing(dotAnimation, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(dotAnimation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                })
            ]).start(() => animateDots());
        };
        animateDots();
    }, []);

    return (
        <ImageBackground
        source={require('../assets/images/background/bg.jpg')}
        style={styles.container}
        resizeMode="cover"
    >
        <View style={styles.logoContainer}>
                <Image source={require('../assets/images/skyble.png')} style={styles.logo} />
                <View style={styles.dotsContainer}>
                    <Animated.View style={[styles.dot, { opacity: dotAnimation }]} />
                    <Animated.View style={[styles.dot, { opacity: dotAnimation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }) }]} />
                    <Animated.View style={[styles.dot, { opacity: dotAnimation }]} />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top:100
    },
    logo: {
        width: 400,
        height: 400,
        marginBottom: 20
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: 'white'
    }
});

export default LoadingComponent;