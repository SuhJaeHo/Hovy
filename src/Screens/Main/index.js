import React, {Component} from 'react';
import {Text, View, Pressable, Image, Platform} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 
import styles from './styles'

import {useNavigation} from '@react-navigation/native';

import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';
import Router from '../../Navigation/Router';
import { useState } from 'react';

export default class Main extends Component{
  constructor(props) {
      super(props);
      this.state = {
          latitude: 0,
          longitude: 0,
          marginBottom: 1,  
          error: null,               
      };     
  }

  componentDidMount() {
    setTimeout(() => this.setState({marginBottom: 0}), 100)
    if(this.props.route.params !== undefined){
      console.log(this.props.route.params.lat);
      this.setState({
        latitude: this.props.route.params.lat,
        longitude: this.props.route.params.lng
      });  
    }

    if(this.props.route.params === undefined){
        Geolocation.getCurrentPosition(
          position => {
              this.setState({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  error: null
              });
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
      }
    }

  render() {
    return(
        <View style={{width: '100%', height: '100%'}}>

          <Pressable 
            style={styles.locationSearchBtn}
            onPress={() => this.props.navigation.navigate('LocationSearch')}
          >
            
            <Text style={styles.locationSearchText}>{this.state.latitude}</Text>
              
          </Pressable>
          
          <MapView
            style={{flex: 1, marginBottom: this.state.marginBottom, width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            showsUserLocation={true}
            showsMyLocationButton={true}
            ref={ref => this.map = ref}
            region={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}
          >
                      
          <Marker coordinate={this.state} /> 
          </MapView>
        </View>              
      );
  }
}        

