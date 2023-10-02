import styles from './AudioPlayer.style';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { Button, View } from 'react-native';

interface AudioPlayerProps {
    fillDuration: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ fillDuration }) => {

    const [sound, setSound] = useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('./assets/Hello.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />
        </View>
    );
}


export default AudioPlayer