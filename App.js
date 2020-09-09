import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState= () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Text style={styles.welcome}>Starting the mines</Text>
          <Text style={styles.instructions}>
            { `Grid size: ${params.getRowsAmount()}x${params.getColumnsAmount()}` }
          </Text>
          <View style={styles.board}>
            <MineField board={this.state.board}/>
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
});
