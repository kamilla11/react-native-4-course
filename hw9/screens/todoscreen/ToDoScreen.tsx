import {observer} from 'mobx-react';
import {useRootStore} from '../../hooks/useRootStore';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput, Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CompletedTasksModal} from "./components/CompletedTasksModal.tsx";
import {Modalize} from "react-native-modalize";
import {TaskItem} from "./components/TaskItem.tsx";

const ToDoScreen = observer(() => {
    const {toDoStore} = useRootStore();

    const [task, setTask] = useState('');
    const modalizeRef = useRef<Modalize>(null);

    const addTask = () => {
        toDoStore.addTask(task);
        setTask('');
    };

    const toggleTask = (id: string) => {
        toDoStore.toggleTaskCompletion(id);
    };

    const deleteTask = (id: string) => {
        Alert.alert('Delete', 'Are you sure?', [
            {
                text: 'No',
                //onPress: () => {},
                style: 'cancel',
            },
            {text: 'Yes', onPress: () => toDoStore.deleteTask(id)},
        ]);
    };

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>TODO List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a task"
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <Button title="Add" onPress={() => addTask()}/>
            </View>
            <View style={styles.viewContainer}>
                <Button title="Completed Tasks" onPress={() => onOpen()}/>
            </View>
            <View>
                {toDoStore.tasks.map(item => (
                    <TaskItem
                        key={item.id}
                        item={item}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                    />
                ))}
            </View>
            <CompletedTasksModal modalizeRef={modalizeRef}
                                 data={toDoStore.tasks.filter(task => task.completed)}
            />
        </SafeAreaView>
    );
});

export default ToDoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        color: 'black',
    },
    viewContainer: {
        marginBottom: 20,
    }
});
