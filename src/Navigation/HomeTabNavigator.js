import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { create } from "react-test-renderer";

import Entype from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from '../Screens/Main';
import LocationSearch from '../Screens/LocationSearch';
import MyPage from '../Screens/MyPage';
import Chat from '../Screens/Chat';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'red',
        }}>
            <Tab.Screen 
                name={"홈"}
                component={Main}
                options={{
                    tabBarIcon: (color) => (
                        <MaterialCommunityIcons name="home-outline" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen 
                name={"검색"}
                component={LocationSearch}
                options={{
                    tabBarIcon: (color) => (
                        <Fontisto name="search" size={20} color={color} />
                    ),            
                }}
            />

            <Tab.Screen
                name={"채팅"}
                component={Chat}
                options={{
                    tabBarIcon: (color) => (
                        <Ionicons name="chatbubbles-outline" size={25} color={color} />
                    ),            
                }}
            />  

            <Tab.Screen
                name={"마이페이지"}
                component={MyPage}
                options={{
                    tabBarIcon: (color) => (
                        <Ionicons name="person-outline" size={25} color={color} />
                    ),            
                }}
            />           
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;