import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import { StackActions } from '@react-navigation/native';
const popActions= StackActions.pop(1);
const AppBar2 = ({ title }) => {
    // const styleTypes =['default','dark-content','light-content'];
    // const [visibleStatusBar,setVisibleStatusBar]=  useState(false)
    // const [styleStatusBar, setstyleStatusBar] = useState(styleTypes)
  
    return (
        <>
            <StatusBar backgroundColor={'#6558CB'} />
            <View style={styles.AppBar}>
                <View style={styles.AppBarLeftSection}>
                    <TouchableOpacity onPress={()=>alert('comming soon')}>
                        <View style={{ marginRight: 20 }}>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/icon/back.png')} />
                        </View>
                    </TouchableOpacity>
                    <View><Text style={styles.AppBarTitle}>{title}</Text></View>
                </View>
                <View>
                    <Image style={styles.AppBarAvatar} source={require('../../assets/person/person1.jpg')} />
                </View>
            </View>
        </>
    )
}

export default AppBar2

const styles = StyleSheet.create({
    AppBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        width: '100%',
        alignItems: 'center',
    },
    AppBarLeftSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    AppBarTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },
    AppBarAvatar: {
        width: 40,
        height: 40,
        borderRadius: 40
    }
})
