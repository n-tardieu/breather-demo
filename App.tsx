import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import VerticalProgressBar from './components/ui/VerticalProgressBar/VerticalProgressBar';
import AudioPlayer from './features/AudioPlayer/AudioPlayer';
import PlayButton from './features/PlayButton/PlayButton';
import ResetButton from './features/ResetButton/ResetButton';
import SettingButton from './features/SettingButton/SettingButton';

export default function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(previous => !previous);
  };

  return (
    <View style={styles.container}>
      <VerticalProgressBar isPlaying={isPlaying} fillDuration={5000} />
      <AudioPlayer isPlaying={isPlaying} fillDuration={5000} />
      <PlayButton isPlaying={isPlaying} onPress={togglePlayback} />
      <ResetButton isPlaying={isPlaying} onPress={togglePlayback}></ResetButton>
      <SettingButton isPlaying={isPlaying} onPress={() => { }}></SettingButton>
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
