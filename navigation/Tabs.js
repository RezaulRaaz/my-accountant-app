import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/Home';
import BankScreen from '../screens/Bank/Bank';
import ExpenseScreen from '../screens/Expense/Expense';
import IncomeScreen from '../screens/Income/Income';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopColor: '#fff',
                    elevetion: 0,
                    position: 'absolute',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 60
                }
            }}
        >
            <Tab.Screen name='Home' options={{
                headerShown: false, tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 25, height: 25, resizeMode: "contain" }} source={require('../assets/icon/Home.png')} />
                        <Text style={{ color: focused ? '#6558CB' : '#091157', fontSize: 12 }}>Home</Text>
                    </View>
                )
            }} component={HomeScreen} />

            <Tab.Screen name='Income' options={{
                headerShown: false, tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 25, height: 25, resizeMode: "contain" }} source={require('../assets/icon/income.png')} />
                        <Text style={{ color: focused ? '#6558CB' : '#091157', fontSize: 12 }}>Income</Text>
                    </View>
                )
            }} component={IncomeScreen} />
            <Tab.Screen name='Bank' options={{
                headerShown: false, tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 25, height: 25, resizeMode: "contain" }} source={require('../assets/icon/bank.png')} />
                        <Text style={{ color: focused ? '#6558CB' : '#091157', fontSize: 12 }}>Bank</Text>
                    </View>
                )
            }} component={BankScreen} />
            <Tab.Screen name='Expense' options={{
                headerShown: false, tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 25, height: 25, resizeMode: "contain" }} source={require('../assets/icon/expense.png')} />
                        <Text style={{ color: focused ? '#6558CB' : '#091157', fontSize: 12 }}>Expense</Text>
                    </View>
                )
            }} component={ExpenseScreen} />
              <Tab.Screen name='More' options={{
                headerShown: false, tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 25, height: 25, resizeMode: "contain" }} source={require('../assets/icon/more.png')} />
                        <Text style={{ color: focused ? '#6558CB' : '#091157', fontSize: 12 }}>More</Text>
                    </View>
                )
            }} component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})
