import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppBar from '../../components/Appbar/AppBar'

const Bank = () => {
    return (
        <View>
            <View style={{ paddingRight: 15, paddingLeft: 15, backgroundColor: '#6558CB' }}><AppBar icon={require('../../assets/icon/back.png')} title="Bank" ></AppBar></View>
        </View>
    )
}

export default Bank

const styles = StyleSheet.create({})
