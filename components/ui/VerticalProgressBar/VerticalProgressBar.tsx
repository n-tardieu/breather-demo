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
    const [remainingDuration, setRemainingDuration] = useState(0);
    const [wasRecentlyPaused, setWasRecentlyPaused] = useState(false);



    // TODO: to optimize
    const getCustomEasing = (duration: number, fillDuration: number) => {
        const factor = duration / fillDuration;

        const x1 = 0.42 - 0.1 * factor;
        const y1 = 0;
        const x2 = 0.58 + 0.1 * factor;
        const y2 = 1;

        return Easing.bezier(x1, y1, x2, y2);
    }



    useEffect(() => {
        if (isPlaying)
            startAnimation()
        else
            pauseAnimation()
    }, [isPlaying, isInspiration])

    useEffect(() => {
        progress.setValue(0)
        setWasRecentlyPaused(false)
    }, [isResetting])


    const startAnimation = () => {
        const duration = wasRecentlyPaused ? remainingDuration : fillDuration;
        // const customEasing = getCustomEasing(duration, fillDuration);

        if (isInspiration)
            Animated.timing(progress, {
                toValue: 1,
                duration: (duration),
                easing: Easing.inOut(Easing.quad),
                // easing: wasRecentlyPaused ? customEasing : Easing.inOut(Easing.quad),
                useNativeDriver: false
            }).start()
        else
            Animated.timing(progress, {
                toValue: 0,
                duration: (duration),
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: false
            }).start()
        if (wasRecentlyPaused) {
            setWasRecentlyPaused(false);
        }
    }

    const pauseAnimation = () => {
        progress.stopAnimation(value => {
            let remaining = isInspiration ? fillDuration * (1 - value) : fillDuration * value;
            setRemainingDuration(remaining);
            setWasRecentlyPaused(true);
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
