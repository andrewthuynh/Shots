import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import BottomNav from './components/BottomNav';

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider style={styles.container}>
        <BottomNav />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
