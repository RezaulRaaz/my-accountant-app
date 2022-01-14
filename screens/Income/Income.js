import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import AppBar2 from '../../components/Appbar/AppBar2'
import Head from '../../components/Head/Head'

const Income = ({ navigation }) => {

    function addIcome() {
        alert('ok');
    }

    return (
        <View style={styles.container} >
            <View style={{ paddingRight: 15, paddingLeft: 15, backgroundColor: '#6558CB' }}><AppBar2 icon={require('../../assets/icon/back.png')} title="Income" ></AppBar2></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.navigate('IncomeEntryScreen')} >
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
            <TouchableOpacity onPress={() => navigation.navigate('IncomeEntryScreen')}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 50, backgroundColor: '#6558CB', position: 'absolute', right: 20, bottom: 80 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Income

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
