import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppBar from '../../components/Appbar/AppBar'

const IncomEntry = ({navigation}) => {
    return (
        <View styles={styles.container}>
            <View style={{ paddingRight: 15, paddingLeft: 15, backgroundColor: '#6558CB' }}><AppBar  icon={require('../../assets/icon/back.png')} title="Income Entry" ></AppBar></View>
            <View style={{height:20}}></View>
            <View>
                <Text style={{fontSize:20,color:'#091157',textAlign:'center'}}>Total Balance</Text>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#6558CB',textAlign:'center'}}>12,20,000</Text>
            </View>
        </View>
    )
}

export default IncomEntry

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})
