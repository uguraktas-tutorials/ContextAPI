import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import { AppContext } from '../context/AppContext'

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text> {this.context.getData} </Text>
                <TouchableOpacity onPress={() => this.setData()}>
                    <Text>Change context</Text>
                </TouchableOpacity>
            </View>
        )
    }
    setData() {
        this.context.setData('Hello Context')
    }
}

HomeScreen.contextType = AppContext

const styles = StyleSheet.create({})
