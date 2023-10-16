import { Text, TouchableOpacity } from 'react-native';
import styles from './BackButton.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface BackButtonProps {
    onPress: () => any
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {

    return (
        <TouchableOpacity style={styles.more} onPress={onPress}>
            <Ionicons name="arrow-back" size={24} color="#555938" />
        </TouchableOpacity>
    );
}


export default BackButton