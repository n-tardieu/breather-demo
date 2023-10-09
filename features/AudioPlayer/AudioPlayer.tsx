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

    async function playSound() {
        if (!isVolumeOff) {
            const { sound } = await Audio.Sound.createAsync(require('../../media/21764.mp3'));
            console.log('Playing Sound');
            await sound.playAsync();
        }
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;
        interval = setInterval(() => {
            playSound();
        }, fillDuration);
        return () => clearInterval(interval);
    }, [isVolumeOff, fillDuration]);

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