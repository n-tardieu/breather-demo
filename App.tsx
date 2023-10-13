import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import VerticalProgressBar from './components/ui/VerticalProgressBar/VerticalProgressBar';
import AudioPlayer from './features/AudioPlayer/AudioPlayer';
import PlayButton from './features/PlayButton/PlayButton';
import ResetButton from './features/ResetButton/ResetButton';
import MoreButton from './features/MoreButton/MoreButton';
import Router from './router/Router';

export default function App() {

  return (
    <Router></Router>
  );
}

