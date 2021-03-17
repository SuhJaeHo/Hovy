import React, {Component} from 'react';
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

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
        navigation.push('Main', {lat: details.geometry.location.lat, lng: details.geometry.location.lng, address: data.description})
      }}
      styles={{
        textInput: styles.textInput,
      }}
      query={{
        key: 'AIzaSyBMk4s9KTSOS2IICXgJ8jQQAeITjx8f3fE',
        language: 'ko',
      }}
    />
    </View>
  );
};

export default LocationSearch;