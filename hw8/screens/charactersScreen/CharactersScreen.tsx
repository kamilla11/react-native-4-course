import {observer} from "mobx-react";
import {useRootStore} from "../../hooks/useRootStore";
import {useEffect} from "react";
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View, Image} from "react-native";
import {CharacterCard} from "./components/CharacterCard.tsx";

export const CharactersScreen = observer(() => {
    const {characterStore} = useRootStore();

    useEffect(() => {
        characterStore.getCharacters();
    }, [characterStore]);

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView contentContainerStyle={styles.list}>
                {!characterStore.isLoading && characterStore.characters ? (
                    characterStore.characters.map((character, id) => {
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
    list: {
        padding: 16,
    }
});
