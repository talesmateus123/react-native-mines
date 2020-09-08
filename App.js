import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import params from './src/params';
import Field from './src/components/Field'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Starting the mines</Text>
        <Text style={styles.instructions}>
          { `Grid size: ${params.getRowsAmount()}x${params.getColumnsAmount()}` }
        </Text>
        <Field></Field>
        <Field opened></Field>
        <Field opened nearMines={2}></Field>
        <Field opened nearMines={3}></Field>
        <Field opened nearMines={4}></Field>
        <Field opened nearMines={5}></Field>
        <Field opened nearMines={6}></Field>
        <Field opened nearMines={7}></Field>
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
