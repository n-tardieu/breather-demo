import { StackHeaderProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styles from './Breath.style'
import { View } from 'react-native';
import VerticalProgressBar from '../../components/ui/VerticalProgressBar/VerticalProgressBar';
import AudioPlayer from '../../features/AudioPlayer/AudioPlayer';
import MoreButton from '../../features/MoreButton/MoreButton';
import PlayButton from '../../features/PlayButton/PlayButton';
import ResetButton from '../../features/ResetButton/ResetButton';
import TimeProgressBar from '../../components/ui/TimeProgressBar /TimeProgressBar';
import useBreath from '../../features/hooks/Breath';


const Breath: React.FC<StackHeaderProps> = ({ navigation }) => {

    const fillDuration = 5000
    const sessionDuration = fillDuration * 60 // Prod
    // const sessionDuration = fillDuration * 6 // Dev mode

    const { currentTime, isPlaying, isResetting, isInspiration, togglePlay, toggleReset } = useBreath(sessionDuration)
    return (
        <View style={styles.container}>
            <VerticalProgressBar isPlaying={isPlaying} isInspiration={isInspiration} fillDuration={fillDuration} isResetting={isResetting} />
            <AudioPlayer isPlaying={isPlaying} isInspiration={isInspiration} />
            <PlayButton isPlaying={isPlaying} onPress={() => togglePlay()} />
            <ResetButton isPlaying={isPlaying} onPress={() => toggleReset()}></ResetButton>
            {/* <MoreButton isPlaying={isPlaying} onPress={() => { navigation.push('Settings') }}></MoreButton> */}
            <StatusBar style="auto" />
            <TimeProgressBar isPlaying={isPlaying} isResetting={isResetting} currentTime={currentTime} totalTime={sessionDuration} ></TimeProgressBar>
        </View>
    );
}


export default Breath