import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './AudioPlayer.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface AudioPlayerProps {
    isEnable: boolean
    fillDuration: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isEnable, fillDuration }) => {

    const [isVolumeOff, setIsVolumeOff] = useState<boolean>(false);
    const [currentSong, setCurrentSong] = useState<number>(1);


    const songs = [
        require('../../media/song-1.mp3'),
        require('../../media/song-2.mp3')
    ];

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(songs[currentSong]);
        console.log(`Playing Sound ${currentSong}`);
        await sound.playAsync();
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;
        interval = setInterval(() => {
            setCurrentSong(prev => prev === 0 ? 1 : 0)
            if (!isVolumeOff && isEnable) {
                playSound();
            }
        }, fillDuration);
        return () => clearInterval(interval);
    }, [isVolumeOff, fillDuration, isEnable, currentSong]);

    const toggleSound = () => {
        setIsVolumeOff(prev => !prev);
    }

    return (
        <TouchableOpacity style={styles.player} onPress={toggleSound}>
            {isVolumeOff ? <Ionicons name="volume-mute" size={24} color="#555938" /> :
                <Ionicons name="volume-high" size={24} color="#555938" />
            }
        </TouchableOpacity>
    );
}


export default AudioPlayer