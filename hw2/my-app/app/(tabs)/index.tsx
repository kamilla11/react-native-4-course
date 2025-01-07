import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
} from "react-native";

export default function HomeScreen() {
    return (
        <ScrollView
            style={styles.scrollContainer}
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
        >
            {/* Комбинация 1 */}
            <View
                style={[styles.combination]}
                accessibilityLabel="Первый контейнер"
                accessible
            >
                <Text
                    style={[styles.text, {color: "darkblue"}]}
                    accessibilityLabel="Текст для кнопки"
                >
                    Первый текст с заголовком
                </Text>
                <Image
                    style={styles.image}
                    src={'https://reactnative.dev/img/tiny_logo.png'}
                    alt="Лого"
                    resizeMode="cover"
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={() => Alert.alert("Нажата кнопка 1!")}
                >
                    <Text style={styles.buttonText}>Нажми меня</Text>
                </TouchableOpacity>
            </View>

            {/* Комбинация 2 */}
            <View
                style={[
                    styles.combination,
                    {borderColor: "red", borderWidth: 2, padding: 20},
                ]}
                accessibilityLabel="Второй контейнер"
            >
                <Text
                    style={[styles.text, {fontSize: 20}]}
                    numberOfLines={1}
                    onLongPress={() => Alert.alert("   Второй текст с ограничением строк На самом деле здесь много строк, но\n" +
                        "          все они не видны.")}
                >
                    Второй текст с ограничением строк На самом деле здесь много строк, но
                    все они не видны.
                </Text>
                <Image
                    style={[styles.image, {borderRadius: 15}]}
                    src={'https://yandex-images.clstorage.net/q48cVj217/175882bYtost/ZtpIcw7hI6z8aE67IdrqWDZ3Kps4c2E8pUuodQ2sOlsjVxUBCooq1Ev_-BvuTi53sOO7amb_dAeLKYSW-cPfyEKvzEbqkSP9uNjqeoEb6wz3oxvPGeMhSTWOjqOa7n34xIFy9k1oiwRLWr1vKrqPFAaH6_9g2wVE6Gq2g3x3uK-3SQshesODbwuqjrui-xhdRcXZHMqEsC2D2z1yyIx9mdfTEWQNinq1WvltTt0aLWUFYasOQNrEVYhL1IENFnr8F8qLQWpTk_-L6-w7kAup75bkaYyr5hOckekNcRi_P8vmkxDlPug6xrtIrxw_ee90x7M6H6NoBIdpiWdRfjR4PUVJKzMpUUO_2lvP-RG52ky2p5u8iYcwviOZ_yC4XT1qJlAylg_KeDVJqZ__nLjdFHZxyDwRKldViatHcz11-g5WGAoDWvLxn_vpjFuiuJmuN7Xov_v3kjxxC23R6l5em1VSoVZ8uPoHW9hN_686j8en0cpeU0sVpEop9WCMtLk_FWqpgnpTAZ-aq_wY8OjIT4SFy8-L1oGMk6stAjrtDnqn81P270tLx_s6rL08-W43ZzKaHEDLRPSJOtTQTGQbbAXq2XJ5IeEeifpPi2ErKr3V9UlPSdbBTlHavWCqL32KJRKRN20K-5Uby-48XjufNSVjaCxR2MdVedtXAX0GSuxV2HhjCBBi_QgrLzuQOzns9DT5L6nVwM6wu44COW7O2CbhMtT-eurU2zpfbyyLvQblszoPwfgkdXuZ1VG9FAq9h4sJorth43-quuz7cUk4z8c0ClyY9-C_g6qfYhluHxkFAXME3ev6RTjbz0-sa4yntbNLD4PKN3SY2PajLsW4veTJafN4gzF_aQq8uyKKObwntbseWtTBn0ArH8FJbCyIFFByRI5YyfSbeLxPrRq8N8Wz-j_xGnQW2BqHQ113ud4FqAtBupHAvTj43frDSkstVHf67oun0J4huP3AI'}
                    accessibilityLabel="Котик"
                    blurRadius={3}
                />
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: "green"}]}
                    onPressIn={() => Alert.alert("Нажатие начато")}
                    onPressOut={() => Alert.alert("Нажатие завершено")}
                >
                    <Text style={styles.buttonText}>Жми!</Text>
                </TouchableOpacity>
            </View>

            {/* Комбинация 3 */}
            <ScrollView
                style={[styles.scrollViewContainer, {marginBottom: 50}]}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentInset={{top: 10, left: 10, bottom: 10, right: 10}}
                onMomentumScrollEnd={() =>
                    Alert.alert("Горизонтальный скролл завершён!")
                }
                accessibilityLabel="Третий контейнер"
            >
                <View
                    style={[
                        styles.combination,
                        {
                            shadowColor: "#000",
                            shadowOffset: {width: 5, height: 5},
                            shadowOpacity: 0.5,
                        },
                    ]}
                >
                    <Text
                        style={[styles.text, {lineHeight: 24}]}
                        selectable
                        adjustsFontSizeToFit
                    >
                        Третий текст с адаптивным шрифтом и выделением
                    </Text>
                    <Image
                        style={[styles.image, {tintColor: "purple"}]}
                        source={{uri: "https://via.placeholder.com/150/800080/FFFFFF"}}
                        progressiveRenderingEnabled
                    />
                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: "purple"}]}
                        onLongPress={() => Alert.alert("Долгое нажатие!")}
                        activeOpacity={0.6}
                    >
                        <Text style={styles.buttonText}>Длинное нажатие</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    combination: {
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
        color: "#333",
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    scrollViewContainer: {
        backgroundColor: "#e6e6e6",
    },
});