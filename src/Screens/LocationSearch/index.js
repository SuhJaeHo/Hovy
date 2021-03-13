import React, {Component} from 'react';
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Main from '../Main';

const LocationSearch = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        navigation.navigate('Main', {lat: details.geometry.location.lat, lng: details.geometry.location.lng})
        // 'details' is provided when fetchDetails = true
      }}
      styles={{
        textInput: styles.textInput,
      }}
      query={{
        key: 'AIzaSyBMk4s9KTSOS2IICXgJ8jQQAeITjx8f3fE',
        language: 'en',
      }}
    />
    </View>
  );
};

export default LocationSearch;