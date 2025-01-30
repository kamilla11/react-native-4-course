import React, {useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {useTheme} from "../../modules/theme/hooks/useTheme.ts";
import {IColors, ThemeTypes} from "../../modules/theme/ThemeTypes.ts";
import Icon from "react-native-vector-icons/Ionicons";
import {observer} from "mobx-react";
import {useRootStore} from "../../hooks/useRootStore";
import {useTranslation} from "react-i18next";
import {LangType} from "../../modules/lang/LangType.ts";

export const SettingsScreen = observer(() => {
    const {langStore} = useRootStore();
    const {t} = useTranslation(['settings']);
    const {Colors, changeTheme} = useTheme();
    const styles = useStyles(Colors);

    const [selectedLang, setSelectedLang] = useState(langStore.lang);

    const handleChangeLang = async (newLang: LangType) => {
        await langStore.changeLang(newLang);
        setSelectedLang(newLang);
    };

    return (
        <SafeAreaView style={styles.content}>
            <Text style={styles.title}>{t("title")}</Text>

            {/*lang*/}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{t("lang.title")}</Text>
                <View style={styles.pickerBox}>
                    <Picker
                        selectedValue={selectedLang}
                        style={styles.picker}
                        onValueChange={(itemValue) => handleChangeLang(itemValue as LangType)}
                    >
                        <Picker.Item label={t("lang.ru")} value={LangType.RU}/>
                        <Picker.Item label={t("lang.en")} value={LangType.EN}/>
                    </Picker>
                </View>
            </View>

            {/*themes*/}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{t("theme.title")}</Text>
                <View style={styles.themeButtons}>
                    <TouchableOpacity style={styles.btn} onPress={() => changeTheme(ThemeTypes.LIGHT)}>
                        <Icon name="sunny" size={30} color={Colors.textPrimary}/>
                        <Text style={styles.btnText}>{t("theme.light")}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => changeTheme(ThemeTypes.DARK)}>
                        <Icon name="moon" size={30} color={Colors.textPrimary}/>
                        <Text style={styles.btnText}>{t("theme.dark")}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => changeTheme(ThemeTypes.SYSTEM)}>
                        <Icon name="laptop" size={30} color={Colors.textPrimary}/>
                        <Text style={styles.btnText}>{t("theme.system")}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => changeTheme(ThemeTypes.CUSTOM)}>
                        <Icon name="planet" size={30} color={Colors.textPrimary}/>
                        <Text style={styles.btnText}>{t("theme.custom")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
});

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        content: {
            flex: 1,
            padding: 20,
            backgroundColor: colors.backgroundPrimary,
        },
        title: {
            fontSize: 28,
            fontFamily: "Caveat-Regular",
            color: colors.textPrimary,
            textAlign: "center",
            marginBottom: 20,
        },
        section: {
            marginBottom: 30,
        },
        sectionTitle: {
            fontSize: 22,
            fontFamily: "Caveat-Regular",
            color: colors.textPrimary,
            marginBottom: 10,
        },
        pickerBox: {
            borderWidth: 1,
            borderColor: colors.accentDefault,
            borderRadius: 5,
            backgroundColor: colors.optional,
        },
        picker: {
            height: 50,
            color: colors.textPrimary,
        },
        themeButtons: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
        },
        btn: {
            alignItems: "center",
            backgroundColor: colors.accentDefault,
            padding: 10,
            width: 150,
            elevation: 3,
            shadowColor: "#000",
            marginBottom: 10,
        },
        btnText: {
            color: colors.textPrimary,
            fontFamily: "Caveat-Regular",
            fontSize: 16,
            textAlign: "center",
        },
    });
