import { TouchableOpacity } from 'react-native';
import styles from './ResetButton.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface ResetButtonProps {
    isPlaying: boolean
    onPress: () => any
}

const ResetButton: React.FC<ResetButtonProps> = ({ isPlaying, onPress }) => {

    return (
        <TouchableOpacity disabled={isPlaying} style={styles.player} onPress={onPress}>
            {!isPlaying ? <Ionicons name="md-reload" size={24} color="#555938" /> :
                <Ionicons name="md-reload" size={24} color="#cccdc3" />
            }
        </TouchableOpacity>
    );
}


export default ResetButton