import React, { useEffect, useState } from 'react';
import { Easing, View } from 'react-native';
import styles from './TimeProgressBar.style';
import { Animated } from 'react-native';

interface TimeProgressBarProps {
    isPlaying: boolean;
    isResetting: boolean;
    fillDuration: number;
}

const TimeProgressBar: React.FC<TimeProgressBarProps> = ({ isPlaying, isResetting, fillDuration }) => {
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

    const containerStyle = {
        height: 5,
        backgroundColor: 'grey',
        margin: 10,
    };

    const barStyle = {
        height: 5,
        backgroundColor: '#333',
    };


    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.View style={[styles.bar, barStyle, { width: progress }]} />
        </View>
    );
};

export default TimeProgressBar;
