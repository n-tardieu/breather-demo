import React, { useEffect, useState } from 'react';
import { Easing, View } from 'react-native';
import styles from './VerticalProgressBar.style';


import { Animated } from 'react-native';

interface VerticalProgressBarProps {
    isEnable: boolean
    fillDuration: number
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({ isEnable, fillDuration }) => {
    const [progress] = useState(new Animated.Value(0));


    useEffect(() => {
        let animation: any;

        const animateProgress = () => {
            animation = Animated.sequence([
                Animated.timing(progress, {
                    toValue: 1,
                    duration: fillDuration,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: false
                }),
                Animated.timing(progress, {
                    toValue: 0,
                    duration: fillDuration,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: false
                })
            ])
            Animated.loop(animation).start()
        };

        if (isEnable) {
            animateProgress();
        } else {
            animation && animation.stop();
        }

        return () => {
            animation && animation.stop();
        };
    }, [isEnable, fillDuration, progress]);

    const containerStyle = {
        height: 402, // Changer la hauteur pour une barre verticale
        width: 44, // Changer la largeur pour une barre verticale
    };

    const barStyle = {
        height: 40, // Changer la hauteur pour une barre verticale
        width: 40, // Changer la largeur pour une barre verticale
        transform: [{
            translateY: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 358] // Changer la valeur pour une barre verticale
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
