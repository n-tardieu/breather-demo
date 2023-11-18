import React, { useState } from 'react';
import { TouchableOpacity, Text, TouchableHighlight } from 'react-native';
import styles from './CustomButton.style';

interface CustomButtonProps {
    fieldName: string
    value?: string
    onClick: () => any
}

const CustomButton: React.FC<CustomButtonProps> = ({ fieldName, value, onClick }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        onClick();
    };

    return (
        <TouchableHighlight
            style={[styles.container, isPressed && styles.pressed]}
            onPress={handlePress}
            underlayColor="#bbb" // Couleur de fond lorsque le bouton est pressé
            onHideUnderlay={() => setIsPressed(false)} // Pour remettre le style après pression
            onShowUnderlay={() => setIsPressed(true)} // Pour changer le style lors de la pression
        >
            <>
                <Text style={styles.text}>{fieldName}</Text>
                {value && <Text style={styles.text}>{value}</Text>}
            </>
        </TouchableHighlight>
    );
};


export default CustomButton;
