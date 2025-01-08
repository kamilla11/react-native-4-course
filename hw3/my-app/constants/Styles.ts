import {StyleSheet} from "react-native";

export const Styles = StyleSheet.create({
    container: {
        padding: 60,
        paddingBottom:80,
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    block: {margin: 10, alignItems: 'center', width: '100%'},
    headerText: {marginBottom: 60, fontSize: 40, fontWeight: 'bold'},
    text: {marginVertical: 16},
    errorText: {color: 'red'},
    textInputView: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    line: {height: 1, backgroundColor: 'black'},
    textInput: {padding: 8, backgroundColor: '#f5f5f5', minWidth: 150, textAlign: 'center'}
});