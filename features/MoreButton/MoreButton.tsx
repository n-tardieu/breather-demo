import { Text, TouchableOpacity } from 'react-native';
import styles from './MoreButton.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface MoreButtonProps {
    isPlaying: boolean
    onPress: () => any
}

const MoreButton: React.FC<MoreButtonProps> = ({ isPlaying, onPress }) => {

    return (
        <TouchableOpacity disabled={isPlaying} style={styles.more} onPress={onPress}>
            {!isPlaying ?
                <Ionicons name="ellipsis-vertical" size={24} color="#555938" /> :
                <Ionicons name="ellipsis-vertical" size={24} color="#cccdc3" />
            }
        </TouchableOpacity>
    );
}


export default MoreButton