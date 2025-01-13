import {observer} from "mobx-react";
import {useRootStore} from "../../hooks/useRootStore";
import {useEffect} from "react";
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View, Image} from "react-native";
import {CharacterCard} from "./components/CharacterCard.tsx";

export const HomeScreen = observer(() => {
    const {characterStore} = useRootStore();

    useEffect(() => {
        characterStore.getCharacters();
    }, [characterStore]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/rickAndMortyLogo.png')}
                    style={styles.logo}
                />
            </View>
            <ScrollView contentContainerStyle={styles.list}>
                {!characterStore.isLoading && characterStore.characterModel ? (
                    characterStore.characterModel.characters.map((character, id) => {
                        return (
                            <CharacterCard key={character.id} character={character}/>
                        )
                    })
                ) : (
                    <ActivityIndicator/>
                )}
            </ScrollView>
        </SafeAreaView>
    )
        ;
});

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingHorizontal: 24,
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        width: 200,
        height: 60,
        resizeMode: 'contain',
    },
    list: {
        padding: 16,
    }
});
