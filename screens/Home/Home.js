import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import AppBar from '../../components/Appbar/AppBar'
import Head from '../../components/Head/Head'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{ paddingRight: 15, paddingLeft: 15 }}><AppBar icon={require('../../assets/icon/Icon.png')} title="My Accountant"  ></AppBar></View>
            <View style={styles.content}>
                <View style={styles.dasboardAnylitics}>
                    <View style={styles.leftDasboard}>
                        <View style={styles.totalBalance}>
                            <Text style={{ color: '#00D5BC', fontWeight: 'bold', fontSize: 20 }}>50,000</Text>
                            <Text style={{ color: '#262626', fontSize: 16 }}>Available</Text>
                        </View>
                    </View>
                    <View style={styles.rightDasboard}>
                        <View style={{ width: '100%' }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, marginBottom: 5, textTransform: 'uppercase' }}>January 2022</Text>
                            <View style={styles.item}>
                                <View style={styles.rightItem}>
                                    <Text style={{ fontWeight: 'bold', color: '#091157' }}>Income</Text>
                                    <Text style={{ fontWeight: 'bold', color: '#00D5BC' }}>40,000</Text>
                                </View>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.rightItem}>
                                    <Text style={{ fontWeight: 'bold', color: '#091157' }}>Expense</Text>
                                    <Text style={{ fontWeight: 'bold', color: '#FF4F4F' }}>40,000</Text>
                                </View>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.rightItem}>
                                    <Text style={{ fontWeight: 'bold', color: '#091157' }}>Due</Text>
                                    <Text style={{ fontWeight: 'bold', color: '#091157' }}>15,000</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={styles.invoiceDetails}>
                    <View style={{ height: 20 }}></View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#091157', paddingLeft: 20 }}>Invoice Details</Text>
                    <View style={{ height: 20 }}></View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person2.jpg')} amount={150} type={'Expense'} title={'Transport Cost'}></Head>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person3.jpg')} amount={'2,000'} type={'Income'} title={'SIA BD LTD'}></Head>
                        </TouchableOpacity >
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person6.jpg')} amount={'50,000'} type={'Income'} title={'Ringersoft LTD'}></Head>
                        </TouchableOpacity >
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person4.jpg')} amount={150} type={'Expense'} title={'Transport Cost'}></Head>
                        </TouchableOpacity >
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person7.jpg')} amount={'2,000'} type={'Income'} title={'SIA BD LTD'}></Head>
                        </TouchableOpacity >
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person2.jpg')} amount={150} type={'Expense'} title={'Transport Cost'}></Head>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person3.jpg')} amount={'2,000'} type={'Income'} title={'SIA BD LTD'}></Head>
                        </TouchableOpacity >
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person6.jpg')} amount={'50,000'} type={'Income'} title={'Ringersoft LTD'}></Head>
                        </TouchableOpacity >
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person4.jpg')} amount={150} type={'Expense'} title={'Transport Cost'}></Head>
                        </TouchableOpacity >
                        <TouchableOpacity >
                            <Head image={require('../../assets/person/person7.jpg')} amount={'2,000'} type={'Income'} title={'SIA BD LTD'}></Head>
                        </TouchableOpacity >

                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6558CB'
    },
    content: {
        height: '95%'
    },
    dasboardAnylitics: {
        paddingLeft: 15,
        paddingRight: 15,
        width: '90%',
        height: '25%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftDasboard: {
        width: 140,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7A6CEA',
        borderRadius: 140,
    },
    totalBalance: {
        width: 125,
        borderColor: '#fff',
        borderWidth: 1,
        height: 125,
        backgroundColor: '#fff',
        borderRadius: 125,
        alignItems: "center",
        justifyContent: 'center'
    },
    rightDasboard: {
        height: 180,
        width: '70%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    item: {
        backgroundColor: '#fff',
        width: '100%',
        height: 35,
        marginBottom: 8, borderRadius: 6,
        justifyContent: 'center'
    },
    rightItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10
    },
    invoiceDetails: {
        height: '70%',
        marginBottom: 70,
        borderRadius: 40,
        backgroundColor: '#ffffff'
    }
})
