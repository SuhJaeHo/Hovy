import React, {useState} from "react";
import {Component} from "react";
import { View, Text, Button } from "react-native";

import styles from './styles';

export default class MakeRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            response: "Server"
        }
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
                <Text>{this.state.response}</Text>
                <Button title="방 개설" onPress={this.connect} style={styles.creatButton}></Button>
            </View>
        )
    }
}