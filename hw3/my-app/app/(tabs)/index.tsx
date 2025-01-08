import React from "react";
import {
    Text,
    View,
    Button
} from "react-native";
import {useState} from "react";
import {Styles} from "@/constants/Styles";

export default function TabOneScreen() {

    const [pressedCount, setPressedCount] = useState(0);
    const handlePress = () => {
        setPressedCount(pressedCount + 1);
    };

    const handleReset = () => {
        setPressedCount(0);
    };

    return (
        <View style={[Styles.container]}>
            <Text style={Styles.headerText}>
                Button Text
            </Text>

            <View style={Styles.block}>
                <Text style={Styles.text}>
                    {pressedCount > 0
                        ? `The button was pressed ${pressedCount} times!`
                        : 'The button isn\'t pressed yet'
                    }
                </Text>
                <Button disabled={pressedCount > 3}
                        title='Press me'
                        onPress={handlePress}
                />
                {pressedCount > 3 &&
                    <Button
                        title='Reset'
                        onPress={handleReset}
                    />
                }
            </View>
        </View>
    );
}