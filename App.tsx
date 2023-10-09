import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import VerticalProgressBar from './components/ui/VerticalProgressBar/VerticalProgressBar';
import AudioPlayer from './features/AudioPlayer/AudioPlayer';
import PlayButton from './features/PlayButton/PlayButton';

export default function App() {

  const [isStart, setIsStart] = useState(false)

  return (
    <View style={styles.container}>
      <VerticalProgressBar isEnable={isStart} fillDuration={5000}></VerticalProgressBar>
      <AudioPlayer isEnable={isStart} fillDuration={5000}></AudioPlayer>
      <PlayButton isPlay={isStart} onPress={() => { setIsStart((previous) => !previous) }}></PlayButton>
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
