import {Button, SafeAreaView, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {useTheme} from "../../modules/theme/hooks/useTheme.ts";
import {IColors, ThemeTypes} from "../../modules/theme/ThemeTypes.ts";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const SettingsScreen = () => {
    const {Colors, changeTheme} = useTheme();
    const styles = useStyles(Colors);
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn} onPress={() => changeTheme(ThemeTypes.LIGHT)}>
                    <Icon name="sunny"
                          size={30}
                          color={Colors.textPrimary}/><Text
                    style={styles.btnText}>Светлая тема</Text></TouchableOpacity>
            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn} onPress={() => changeTheme(ThemeTypes.DARK)}>
                    <Icon name="moon"
                          size={30}
                          color={Colors.textPrimary}/><Text
                    style={styles.btnText}>Темная тема</Text></TouchableOpacity>
            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn} onPress={() => changeTheme(ThemeTypes.SYSTEM)}>
                    <Icon name="laptop"
                          size={30}
                          color={Colors.textPrimary}/><Text
                    style={styles.btnText}>Системная тема</Text></TouchableOpacity>

            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn} onPress={() => changeTheme(ThemeTypes.CUSTOM)}>
                    <Icon name="planet"
                          size={30}
                          color={Colors.textPrimary}/><Text
                    style={styles.btnText}>Кастомная тема</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundPrimary,
        },
        btnBox: {
            marginBottom: 20,
        },
        btn: {
            alignItems: 'center',
            backgroundColor: colors.accentDefault,
            padding: 10,
            width: 150,
            elevation: 3,
            shadowColor: '#000',
        },
        btnText: {
            color: colors.textPrimary,
            fontFamily: 'Caveat-Regular',
            fontSize: 20
        }
    });
