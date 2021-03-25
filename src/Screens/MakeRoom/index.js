import React from "react";
import {Component, useState} from "react";
import { View, Text, Pressable, TextInput, Button } from "react-native";

import styles from './styles';

import 'react-native-gesture-handler';

export default class MakeRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room: {
                lat: 0,
                lng: 0,
                address: "",
                title: "",
                content: "",
            },
            response: "Server",
            check: 1,
        }
    }

    componentDidMount() {
        if(this.props.route.params !== undefined){
            this.setState({
                room: {                    
                    lat: this.props.route.params.lat,
                    lng: this.props.route.params.lng,
                    address: this.props.route.params.address,
                },               
            });
        }
    }

    passing = () => {
        this.props.navigation.push('Main', {roomLat: this.props.route.params.lat, roomLng: this.props.route.params.lng, check: 1})
    }

    connect = () => {
        const URL = "http://10.0.2.2:5000/";
        fetch(URL).then(response => {
            if(response.status == 200){
                return response.text()
            }
            else{
                throw new Error("Something is wrong");
            }
        }).then(responseText => {
            this.setState({response : responseText});
        }).catch(error => {
            console.error(error.message);
        });
    }

    render(){
        return(
            <View>
                <View>
                    <Text>지역</Text>
                    <Pressable 
                        style={styles.Input_Destination} 
                        placeholder="지역 검색"
                        onPress={() => this.props.navigation.push('LocationSearch', {check: 1})}
                    >
                        <Text>{this.state.room.address}</Text>
                    </Pressable>
                </View>
                <View>
                    <Text>방제</Text>
                    <TextInput 
                        style={styles.Input_Title} 
                        placeholder="같이 놀아요" 
                        onChangeText={(title) => this.setState({title})}
                    />
                </View>
                <View>
                    <Text>내용</Text>
                    <TextInput 
                        style={styles.Input_Content} 
                        onChangeText={(content) => this.setState({content})}
                    />
                </View>
                <Text>{this.state.response}</Text>
                <Button
                    title="방 개설" 
                    onPress={() => {this.connect(); this.passing();}} 
                    style={styles.creatButton}
                >

                </Button>
            </View>
            
        )
    }
}