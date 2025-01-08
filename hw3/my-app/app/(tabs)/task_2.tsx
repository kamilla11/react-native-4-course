import {View, Text, ScrollView} from 'react-native';
import React, {useState} from "react";
import {InputName} from "@/components/InputName";
import {InputHiddenName} from "@/components/InputHiddenName";
import {LoginForm} from "@/components/LoginForm";
import {Styles} from "@/constants/Styles";


export default function TabTwoScreen() {
    const [isWelcomeShown, setWelcomeShown] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={Styles.container}>
            <Text style={Styles.headerText}>
                TextInput
            </Text>

            <InputName/>
            <View style={[Styles.block, Styles.line]}></View>

            <InputHiddenName/>

            <View style={[Styles.block, Styles.line]}></View>

            {isWelcomeShown ?
                <View style={Styles.block}>
                    <Text style={[Styles.headerText]}> Welcome </Text>
                </View> :
                <LoginForm setWelcomeShown={setWelcomeShown}/>
            }
        </ScrollView>
    );
}