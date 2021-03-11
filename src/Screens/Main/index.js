import React, {Component} from 'react';
import {Text, View, Pressable, Platform} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 
import styles from './styles'

import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

export default class Main extends Component{
  constructor(props) {
      super(props);
      this.state = {
          latitude: 0,
          longitude: 0,
          error: null
      };
  }

  componentDidMount() {
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

  render() { 
    return(
          <MapView
            style={{width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            region={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}
          >

          <Marker coordinate={this.state} /> 
          </MapView>              
      );
  }
}        

