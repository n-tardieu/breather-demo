import React from 'react';
import { Text, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import BackButton from '../../features/BackButton/BackButton';
import styles from './Settings.style'
import CustomButton from '../../components/ui/CustomButton/CustomButton';

const Settings: React.FC<StackHeaderProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={navigation.goBack}></BackButton>
        <Text>Réglages</Text>
      </View>
      <View style={styles.section}>
        <CustomButton fieldName='Durée total' value='5min' onClick={() => { }} />
        <CustomButton fieldName="Durée d'inspiration" value='5min' onClick={() => { }} />
        <CustomButton fieldName="Durée d'expiration" value='5min' onClick={() => { }} />
      </View>

      <CustomButton fieldName="Version" value='1.0.0_220324' onClick={() => { }} />
      <CustomButton fieldName="A propos" onClick={() => { }} />

    </View>
  );
}

export default Settings