import React, { useState } from 'react';
import { TouchableOpacity, Text, TouchableHighlight, View, Switch } from 'react-native';
import styles from './CustomButton.style';


const ToggleButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Toggle Button</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text style={styles.text}>{isEnabled ? 'Enabled' : 'Disabled'}</Text>
        </View>
    );
};

interface CustomButtonProps {
    fieldName: string
    value?: string
    valueUnit?: string
    haveToggle?: boolean
    description?: string
    onClick: () => void
}

const CustomButton: React.FC<CustomButtonProps> = ({ fieldName, value, valueUnit, haveToggle, description, onClick }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        // return value
        onClick();
    };

    if (!!haveToggle) {
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
                    <Text style={styles.text}>{description}</Text>
                    <ToggleButton></ToggleButton>
                </>

            </TouchableHighlight>
        )
    }

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
