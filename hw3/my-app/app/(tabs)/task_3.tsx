import {StyleSheet, View, Text, Button, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Styles} from "@/constants/Styles";
import React, {useState} from "react";

export default function TabThreeScreen() {
    const boxColors = ['yellow', 'blue', 'red'];
    const [boxes, setBoxes] = useState([]);
    const [boxColor, setBoxColor] = useState('yellow');
    const [boxWidth, setBoxWidth] = useState('');

    const handleAdd = () => {
        const width = boxWidth;
        const color = boxColor;
        setBoxes([
            ...boxes,
            {width: width, height: width, color: color}
        ]);
    };

    const handleClear = () => {
        setBoxes([]);
        setBoxWidth('');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.boxesContainer}>
                {boxes.map((item, index) => <Box key={'box '+index} width={item.width} height={item.height} color={item.color}
                                        border={false}></Box>)}
            </View>

            <View style={styles.block}>
                <Text style={styles.label}>Размер</Text>
                <TextInput
                    value={boxWidth}
                    style={Styles.textInput}
                    onChangeText={text => {
                        setBoxWidth(text)
                    }}
                />
            </View>

            <View style={styles.block}>
                <Text style={styles.label}>Цвет</Text>
                {boxColors.map(color => <TouchableOpacity key={'color ' + color} onPress={() => setBoxColor(color)}><Box
                    width={50} height={50}
                    color={color} border={color === boxColor}></Box></TouchableOpacity>)}
            </View>

            <View style={styles.block}>
                <TouchableOpacity disabled={boxWidth.length === 0} style={styles.button} onPress={handleAdd}>
                    <Text>Добавить</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleClear}>
                    <Text>Очистить</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const Box = (props: { width, height, color, border }) => {
    return (
        <View style={[props.border ? {borderColor: '#000', borderWidth: 2} : {}, {
            width: props.width, height: props.height, backgroundColor:
            props.color, marginVertical: 10, marginRight: 10
        }]}/>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingBottom: 80,
        display: 'flex',
        flexGrow: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginRight: 10
    },
    block: {flexDirection: 'row', padding: 20, paddingLeft: 0, alignItems: 'center'},
    boxesContainer: {padding: 20, paddingLeft: 0},
    label: {marginRight: 20, width: 60}
});