import {observer} from "mobx-react";
import {useRootStore} from "../../hooks/useRootStore";
import {useEffect} from "react";
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View, Image} from "react-native";
import {CharacterCard} from "./components/CharacterCard.tsx";
import {useTheme} from "../../modules/theme/hooks/useTheme.ts";
import {IColors} from "../../modules/theme/ThemeTypes.ts";

export const CharactersScreen = observer(() => {
    const {characterStore} = useRootStore();
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

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
    );
});

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        container: {
            paddingHorizontal: 24,
            flex: 1,
            backgroundColor: colors.backgroundPrimary,
        },
        list: {
            padding: 16,
        }
    });
