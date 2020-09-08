import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import params from './src/params';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Starting the mines</Text>
        <Text style={styles.instructions}>
          { `Grid size: ${params.getRowsAmount()}x${params.getColumnsAmount()}` }
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default App;
