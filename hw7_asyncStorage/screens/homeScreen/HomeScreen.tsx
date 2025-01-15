import {observer} from "mobx-react";
import {useRootStore} from "../../hooks/useRootStore";
import {useEffect} from "react";
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View, Image, Button, Text} from "react-native";
import {CharacterCard} from "./components/CharacterCard.tsx";

export const HomeScreen = observer(() => {
    const {characterStore} = useRootStore();

    useEffect(() => {
        characterStore.getCharactersFromLocalStorage();
    }, [characterStore]);

    const handleGetCharacters = () => {
        characterStore.getCharactersFromLocalStorage();
    };

    const handleLoadCharacters = () => {
        characterStore.loadCharactersToLocalStorage();
    };

    const handleRemoveCharacters = () => {
        characterStore.removeCharactersFromLocalStorage();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/rickAndMortyLogo.png')}
                    style={styles.logo}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Get characters from local storage" onPress={handleGetCharacters}/>
                    <Button title="Load characters from api to local storage" onPress={handleLoadCharacters}/>
                    <Button title="Remove characters from local storage" onPress={handleRemoveCharacters}/>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.list}>
                {characterStore.characters.length === 0 &&
                    <View style={styles.noDataView}><Text style={styles.text}>No data</Text></View>
                }
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
    },
    buttonContainer: {
        marginTop: 16,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    noDataView: {
        alignItems: 'center',
        textDecorationColor: 'black'
    },
    text: {
        color: 'black'
    }
});
