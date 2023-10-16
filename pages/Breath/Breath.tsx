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


const Breath: React.FC<StackHeaderProps> = ({ navigation }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayback = () => {
        setIsPlaying(previous => !previous);
    };
    return (
        <View style={styles.container}>
            <VerticalProgressBar isPlaying={isPlaying} fillDuration={5000} />
            <AudioPlayer isPlaying={isPlaying} fillDuration={5000} />
            <PlayButton isPlaying={isPlaying} onPress={togglePlayback} />
            <ResetButton isPlaying={isPlaying} onPress={togglePlayback}></ResetButton>
            <MoreButton isPlaying={false} onPress={() => { navigation.push('Settings') }}></MoreButton>
            <StatusBar style="auto" />
            <TimeProgressBar isPlaying={isPlaying} fillDuration={120000} ></TimeProgressBar>
        </View>
    );
}


export default Breath