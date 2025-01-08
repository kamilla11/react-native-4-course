import React, {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import {Styles} from "@/constants/Styles";

export const LoginForm = (props: { setWelcomeShown }) => {
    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [isLoginCorrect, setIsLoginCorrect] = useState(true);
    const [isPasswordCorrecr, setIsPasswordCorrect] = useState(true);

    const login = 'user';
    const password = '1234';

    const signInPress = () => {
        if (inputLogin === login && inputPassword === password)
            props.setWelcomeShown(true);
        setIsLoginCorrect(inputLogin !== '' && inputLogin === login);
        setIsPasswordCorrect(inputPassword !== '' && inputPassword === password);
    };
    return (<View style={Styles.block}>
        <Text style={Styles.text}> Login </Text>
        <TextInput
            style={Styles.textInput}
            onChangeText={text => setInputLogin(text)}
        />
        {!isLoginCorrect &&
            <Text style={[Styles.text, Styles.errorText]}>Incorrect login </Text>
        }

        <Text style={Styles.text}> Password </Text>
        <TextInput
            style={Styles.textInput}
            onChangeText={text => setInputPassword(text)}
        />
        {!isPasswordCorrecr &&
            <Text style={[Styles.text, Styles.errorText]}>Incorrect password </Text>
        }

        <Button onPress={() => signInPress()} title='Sign in'/>
    </View>);

}