import React, { useEffect, useState } from 'react';
import { Easing, View } from 'react-native';
import styles from './VerticalProgressBar.style';
import { Animated } from 'react-native';

interface VerticalProgressBarProps {
    isPlaying: boolean;
    isInspiration: boolean;
    isResetting: boolean;
    fillDuration: number;
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({ isPlaying, isResetting, isInspiration, fillDuration }) => {
    const [progress] = useState(new Animated.Value(0));
    const [pausedProgress, setPausedProgress] = useState(0);

    useEffect(() => {
        if (isPlaying)
            breathLogic()
        else
            pauseAnimation()
    }, [isPlaying, isInspiration])

    useEffect(() => {
        progress.setValue(0)
    }, [isResetting])


    const breathLogic = () => {
        if (isInspiration)
            Animated.timing(progress, {
                toValue: 1,
                duration: (fillDuration),
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: false
            }).start()
        else
            Animated.timing(progress, {
                toValue: 0,
                duration: (fillDuration),
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: false
            }).start()
    }

    const pauseAnimation = () => {
        progress.stopAnimation(value => {
            setPausedProgress(value);
        });
    };

    const containerStyle = {
        height: 402,
        width: 44,
    };

    const barStyle = {
        height: 40,
        width: 40,
        transform: [{
            translateY: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 358]
            })
        }]
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.View style={[styles.bar, barStyle]} />
        </View>
    );
};

export default VerticalProgressBar;
