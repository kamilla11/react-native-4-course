import {Image, StyleSheet, View} from "react-native";

export const Logo = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/images/rickAndMortyLogo.png')}
                style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        width: 200,
        height: 60,
        resizeMode: 'contain',
    }
});
