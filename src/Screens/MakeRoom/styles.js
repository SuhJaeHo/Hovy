import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    Input_Destination: {
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
    Input_Title: {
        backgroundColor: "#dcdcdc",
    },
    Input_Content: {
        backgroundColor: "#dcdcdc",
    },
    creatButton: {
        width: 10,
        height: 10,
        backgroundColor: 'green',       
    },
});

export default styles;