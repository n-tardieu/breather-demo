import { TouchableOpacity } from 'react-native';
import styles from './PlayButton.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface PlayButtonProps {
    onPress: () => any;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onPress }) => {

    return (
        <TouchableOpacity style={styles.player} onPress={onPress}>
            <Ionicons name="play" size={24} color="#555938" />
        </TouchableOpacity>
    );
}


export default PlayButton