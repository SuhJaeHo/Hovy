import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  locationSearchBtn: {
    backgroundColor: '#fff',
    height: 40,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    borderWidth: 3,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  locationSearchText:{
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default styles;