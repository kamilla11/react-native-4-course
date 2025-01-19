import {SafeAreaView, StyleSheet, Text} from "react-native";

export const EpisodesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Страница в разработке...</Text>
        </SafeAreaView>
    )
        ;
};

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingHorizontal: 24,
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle'
    },
    text: {
        color: 'black'
    }
});
