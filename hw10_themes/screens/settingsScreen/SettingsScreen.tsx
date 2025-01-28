import {Button, SafeAreaView, StyleSheet, View} from "react-native";
import {useTheme} from "../../modules/theme/hooks/useTheme.ts";
import {IColors, ThemeTypes} from "../../modules/theme/ThemeTypes.ts";
import React from "react";

export const SettingsScreen = () => {
    const {Colors, changeTheme} = useTheme();
    const styles = useStyles(Colors);
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.btn}>
                <Button onPress={() => changeTheme(ThemeTypes.LIGHT)} title="Светлая тема"
                        color={Colors.accentDefault}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => changeTheme(ThemeTypes.DARK)} title="Темная тема"
                        color={Colors.accentDefault}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => changeTheme(ThemeTypes.SYSTEM)} title="Системная тема"
                        color={Colors.accentDefault}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => changeTheme(ThemeTypes.CUSTOM)} title="Кастомная тема"
                        color={Colors.accentDefault}></Button>
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
        btn: {
            marginBottom: 20,
        }
    });
