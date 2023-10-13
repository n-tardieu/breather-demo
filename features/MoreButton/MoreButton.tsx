import { Text, TouchableOpacity } from 'react-native';
import styles from './MoreButton.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface MoreButtonProps {
    isPlaying: boolean
    onPress: () => any
}

const MoreButton: React.FC<MoreButtonProps> = ({ isPlaying, onPress }) => {

    if (isPlaying)
        return null

    return (
        <TouchableOpacity disabled={isPlaying} style={styles.more} onPress={onPress}>
         <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
        </TouchableOpacity>
    );
}


export default MoreButton