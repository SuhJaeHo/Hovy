import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  locationSearchBtn: {
    backgroundColor: 'green',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 10,
    borderWidth: 3,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    elevation: 100,
  },
  
  locationSearchText:{
    fontWeight: 'bold',
    fontSize: 21
  },
});

export default styles;