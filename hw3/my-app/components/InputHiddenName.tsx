import React, {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import {Styles} from "@/constants/Styles";

export const InputHiddenName = () => {
    const [nameTwo, setNameTwo] = useState('');
    const [isNameVisible, setIsNameVisible] = useState(false);

    return (<View style={Styles.block}>

        <Text style={Styles.text}>
            {isNameVisible && nameTwo ? `Hi ${nameTwo}!` : ''}
        </Text>

        <TextInput
            style={Styles.textInput}
            onChangeText={text => setNameTwo(text)}
        />
        <Button onPress={() => {
            isNameVisible ? setIsNameVisible(false) : setIsNameVisible(true)
        }} title={isNameVisible ? 'Hide name' : 'Show name'}/>
    </View>);
}