import { Text, TouchableOpacity } from 'react-native';
import styles from './SettingButton.style';

// Icons
import { Ionicons } from '@expo/vector-icons';

interface SettingButtonProps {
    isPlaying: boolean
    onPress: () => any
}

const SettingButton: React.FC<SettingButtonProps> = ({ isPlaying, onPress }) => {

    if (isPlaying)
        return null

    return (
        <TouchableOpacity disabled={isPlaying} style={styles.more} onPress={onPress}>
            <Text>Parametres</Text>
        </TouchableOpacity>
    );
}


export default SettingButton