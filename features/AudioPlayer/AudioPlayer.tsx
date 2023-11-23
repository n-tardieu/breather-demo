import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './AudioPlayer.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface AudioPlayerProps {
    isPlaying: boolean;
    isInspiration: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, isInspiration }) => {

    const [isVolumeOff, setIsVolumeOff] = useState<boolean>(false);
    const currentSong = isInspiration ? 1 : 0

    const songs = [
        require('../../media/song-1.mp3'),
        require('../../media/song-2.mp3')
    ];

    async function playSound() {
        const { sound, status } = await Audio.Sound.createAsync(songs[currentSong]);
    
        const onPlaybackStatusUpdate = (status: any) => {
            if (status.didJustFinish) {
                sound.unloadAsync();
                sound.setOnPlaybackStatusUpdate(null); // Nettoyer le gestionnaire d'événements après la fin de la lecture
            }
        };
    
        sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        await sound.playAsync();
    }
    

    useEffect(() => {
        if (!isVolumeOff && isPlaying) {
            playSound();
        }
    }, [isVolumeOff, isPlaying, isInspiration]);

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