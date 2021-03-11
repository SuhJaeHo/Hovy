import React from 'react';
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationSearch = (props) => {

  return (
    <View style={styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
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