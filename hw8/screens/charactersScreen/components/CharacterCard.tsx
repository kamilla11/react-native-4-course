import {Image, StyleSheet, Text, View} from "react-native";
import {CharacterModel} from "../../../modules/characters/CharacterModel.ts";
import React from "react";

type CharacterCardProps = {
    character: CharacterModel;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({character}) => (
    <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.info}>Status: {character.status}</Text>
            <Text style={styles.info}>Species: {character.species}</Text>
            <Text style={styles.info}>Gender: {character.gender}</Text>
            <Text style={styles.info}>Origin: {character.origin.name}</Text>
            <Text style={styles.info}>Location: {character.location.name}</Text>
        </View>
        <Image source={{uri: character.image}} style={styles.image}/>
    </View>
);

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'black'
    },
    info: {
        fontSize: 14,
        color: '#555',
        marginBottom: 2,
    },
});
