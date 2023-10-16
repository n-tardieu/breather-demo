import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import BackButton from '../../features/BackButton/BackButton';


const Settings: React.FC<StackHeaderProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BackButton onPress={navigation.goBack}></BackButton>
      <Text>Settings Screen</Text>
      <Text>empty space..</Text>
    </View>
  );
}

export default Settings