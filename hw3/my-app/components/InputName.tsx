import {StyleSheet, View, Text, Button, TextInput, ScrollView} from 'react-native';
import React, {useState} from "react";
import {Styles} from "@/constants/Styles";

export const InputName = () =>  {
    const [nameOne, setNameOne] = useState('');
    return (<View style={Styles.block}>
    <Text style={Styles.text}>
        {nameOne ? `Hi ${nameOne}!` : 'What is your name?'}
        </Text>
        <TextInput
    style={Styles.textInput}
    onChangeText={text => setNameOne(text)}
    />
    </View>);
}