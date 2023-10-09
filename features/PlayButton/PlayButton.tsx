import { TouchableOpacity } from 'react-native';
import styles from './PlayButton.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface PlayButtonProps {
    onPress: () => any;
    isPlay: boolean
}

const PlayButton: React.FC<PlayButtonProps> = ({ onPress, isPlay }) => {

    return (
        <TouchableOpacity style={styles.player} onPress={onPress}>
            {isPlay ?
                <Ionicons name="play" size={18} color="white" /> :
                <Ionicons name="pause" size={18} color="white" />
            }
        </TouchableOpacity>
    );
}


export default PlayButton