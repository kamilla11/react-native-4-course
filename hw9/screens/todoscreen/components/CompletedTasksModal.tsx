import {Portal} from 'react-native-portalize';
import {Modalize} from "react-native-modalize";
import {StyleSheet, Text, View} from 'react-native';
import ModalProps from "../../../interfaces/ModalProps.ts";
import React from "react";

export const CompletedTasksModal: React.FC<ModalProps> = ({modalizeRef, data}) => {

    return (
        <Portal>
            <Modalize
                ref={modalizeRef}
               modalTopOffset={200}
                childrenStyle={{
                    padding: 20,
                }}
            >
                <Text style={styles.title}>Completed Tasks</Text>
                {data.map(item => (
                    <View key={item.id} style={styles.taskContainer}>
                        <Text style={styles.taskText}>
                            {item.text}
                        </Text>
                    </View>
                ))}
            </Modalize>
        </Portal>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    taskText: {
        fontSize: 16,
        flex: 1,
        marginHorizontal: 10,
        color: 'black',
    },
});
