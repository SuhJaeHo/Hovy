import React, {Component} from 'react';
import {Text, View, Pressable, Image, Platform} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 
import styles from './styles';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import 'react-native-gesture-handler';

import HomeTabNavigator from '../../Navigation/HomeTabNavigator';

export default class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
          region: {
            latitude: 0, 
            longitude: 0,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121, 
          },      
          address: 0,       
          marginBottom: 1, 
          error: null,        
        };
        
        if(this.props.route.params === undefined){
          this.initLocation();
              
          console.log(this.state.address);
      }
    }

    initLocation = async() => {
      await Geolocation.getCurrentPosition(
        position => {
            console.log(position);
            this.setState({
                region: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                },
            });
            Geocoder.init('AIzaSyBMk4s9KTSOS2IICXgJ8jQQAeITjx8f3fE', {language: 'ko'});
            Geocoder.from(position.coords.latitude, position.coords.longitude)
              .then(json => {                                    
                var addressComponent = json.results[0].formatted_address;
                console.log(addressComponent);
                this.setState({
                  address: addressComponent
                });
              })       
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }                            
      )
    }

    onChangeValue = (region) => {
      this.setState({
        region,
      });
      Geocoder.init('AIzaSyBMk4s9KTSOS2IICXgJ8jQQAeITjx8f3fE', {language: 'ko'});
      Geocoder.from(this.state.region.latitude, this.state.region.longitude)
              .then(json => {            
                var addressComponent = json.results[0].formatted_address;
                console.log(addressComponent);
                this.setState({
                  address: addressComponent
                });
              })
    };

    componentDidMount() {
        setTimeout(() => this.setState({marginBottom: 0}), 100)

        if(this.props.route.params !== undefined){
            this.setState({
                region: {
                  latitude: this.props.route.params.lat,
                  longitude: this.props.route.params.lng,
                },
            });
            Geocoder.init('AIzaSyBMk4s9KTSOS2IICXgJ8jQQAeITjx8f3fE', {language: 'ko'});
            Geocoder.from(this.props.route.params.lat, this.props.route.params.lng)
              .then(json => {
                console.log(json);              
                var addressComponent = json.results[0].formatted_address;
                this.setState({
                  address: addressComponent
                });
              })
              console.log(this.state.address);   
            }     
    }

  render() {  
    return(
        
        <View style={{width: '100%', height: '100%'}}>
          <Pressable 
            style={styles.locationSearchBtn}
            onPress={() => this.props.navigation.push('LocationSearch')}
          >
            
            <Text style={styles.locationSearchText}>{this.state.address}</Text>              
          </Pressable>
          {this.state.region.latitude !== 0 ?
          <MapView
            style={{flex: 1, marginBottom: this.state.marginBottom, width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            showsUserLocation={true}
            showsMyLocationButton={true}
            onRegionChangeComplete = {this.onChangeValue}
            ref={ref => this.map = ref}
            region={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}
          >                     
          <Marker coordinate={this.state.region} /> 
          </MapView>
           : null}  
        </View>                  
      );
  }
}        