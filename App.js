import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import AppProvider from './src/context/AppContext'
import HomeScreen from './src/screens/HomeScreen'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <AppProvider>
          <View>
            <HomeScreen />
          </View>
        </AppProvider>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
