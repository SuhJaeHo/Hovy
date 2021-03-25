import React, {Component} from 'react';
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Main from '../Main';
import MakeRoom from '../MakeRoom';

const LocationSearch = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        //check = 1 : 방만들기 화면에서 넘어올 때
        //check = 0 : 메인페이지화면에서 넘어올 때
        if(props.route.params.check === 1){
          navigation.push('MakeRoom', {lat: details.geometry.location.lat, lng: details.geometry.location.lng, address: data.description});
        }else{
          navigation.push('Main', {lat: details.geometry.location.lat, lng: details.geometry.location.lng, address: data.description})
        }
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