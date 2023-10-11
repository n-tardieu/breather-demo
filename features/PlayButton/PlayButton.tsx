import { TouchableOpacity } from 'react-native';
import styles from './PlayButton.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface PlayButtonProps {
    onPress: () => any;
    isPlaying: boolean
}

const PlayButton: React.FC<PlayButtonProps> = ({ onPress, isPlaying }) => {

    return (
        <TouchableOpacity style={styles.player} onPress={onPress}>
            {isPlaying ?
                <Ionicons name="pause" size={18} color="white" /> :
                <Ionicons name="play" size={18} color="white" /> 
            }
        </TouchableOpacity>
    );
}


export default PlayButton