import React, { useEffect, useState } from 'react';
import { Easing, Text, View } from 'react-native';
import styles from './TimeProgressBar.style';
import { Animated } from 'react-native';

interface TimeProgressBarProps {
    isPlaying: boolean;
    isResetting: boolean;
    fillDuration: number;
    totalTime: number;
    currentTime: number;
}

const TimeProgressBar: React.FC<TimeProgressBarProps> = ({ isPlaying, isResetting, fillDuration, totalTime, currentTime }) => {
    const [progress] = useState(new Animated.Value(5));

    useEffect(() => {
        if (isPlaying)
            timerLogic()
        else
            pauseAnimation()
    }, [isPlaying])

    useEffect(() => {
        progress.setValue(5)
    }, [isResetting])

    const timerLogic = () => {
        Animated.timing(progress, {
            toValue: 250,
            duration: (fillDuration),
            useNativeDriver: false
        }).start()
    }

    const pauseAnimation = () => {
        progress.stopAnimation()
    };

    const barContainerStyle = {
        height: 5,
        backgroundColor: 'grey',
        margin: 10,
    };

    const barStyle = {
        height: 5,
        backgroundColor: '#333',
    };

    const formatTime = (timeInMilliseconds: number): string => {
        const seconds = Math.floor(timeInMilliseconds / 1000); // Convertir en secondes
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.barContainer, barContainerStyle]}>
                <Animated.View style={[styles.bar, barStyle, { width: progress }]} />
            </View>
            <View style={styles.timeContainer}>
                <Text>{formatTime(currentTime)}</Text>
                <Text>{formatTime(totalTime)}</Text>
            </View>
        </View>
    );
};

export default TimeProgressBar;
