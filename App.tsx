import React from 'react';
import SurveyScreen from "./SurveyScreen";

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// renders the survey screen on the mobile application upon loading
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
        <SurveyScreen />
    </SafeAreaView>
  );
}

// creates the style sheet for presenting the survey screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
