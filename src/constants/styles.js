import { StyleSheet } from 'react-native';
import { colors } from './colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appColor,
        paddingHorizontal:10
    },
    buttonContainer: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal:20,
    },
    btnView:{
        margin:1.5,
        padding: 15,
        borderRadius:10,
        backgroundColor: colors.appColor,
        opacity:0.7
    },
    btn1:{
        width: 245,
    }
});

export default styles;