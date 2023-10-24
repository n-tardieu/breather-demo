import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import BackButton from '../../features/BackButton/BackButton';


const Settings: React.FC<StackHeaderProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BackButton onPress={navigation.goBack}></BackButton>
      <Text>Currently nothing is configurable</Text>
      <Text>I'm listening to your suggestions</Text>
    </View>
  );
}

export default Settings