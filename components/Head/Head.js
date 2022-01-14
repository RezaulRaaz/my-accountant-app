import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const Head = ({ image, amount, title, type }) => {
    const amountColor = type == 'Expense' ? '#FF4F4F' : '#23DA98';
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 40, height: 40, borderRadius: 40, resizeMode: 'cover' }} source={image} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#091157' }}>{title}</Text>
                        <Text style={{ color: '#AEAEAE' }}>24 Jan, 2022</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: amountColor }}>{amount}</Text>
                </View>
            </View>
        </View>
    )
}

export default Head

const styles = StyleSheet.create({
    wrapper: {
        height: 60,
        borderBottomColor: '#E8EAFF',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    container: {
        paddingLeft: 20,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
