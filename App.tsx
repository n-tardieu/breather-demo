import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VerticalProgressBar from './components/ui/VerticalProgressBar/VerticalProgressBar';

export default function App() {
  return (
    <View style={styles.container}>
      <VerticalProgressBar fillDuration={5000}></VerticalProgressBar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
