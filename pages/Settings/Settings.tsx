import React from 'react';
import { Text, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import BackButton from '../../features/BackButton/BackButton';
import styles from './Settings.style'

const Settings: React.FC<StackHeaderProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={navigation.goBack}></BackButton>
        <Text>Réglages</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.param}>Durée total</Text>
        <Text style={styles.subparam}>5min</Text>

        <Text style={styles.param}>Durée d'inspiration</Text>
        <Text style={styles.subparam}>5s</Text>
        <Text style={styles.param}>Durée d'expiration</Text>
        <Text style={styles.subparam}>5s</Text>
      </View>

      <View style={styles.version}>
        <Text style={styles.param}>Version 1.0.0_220324</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>A propos</Text>
      </View>
    </View>
  );
}

export default Settings