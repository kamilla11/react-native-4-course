import {observer} from 'mobx-react';
import {useRootStore} from '../components/hooks/useRootStore';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import TaskItem from './TaskItem';

const ToDoScreen = observer(() => {
  const {toDoStore} = useRootStore();

  const [task, setTask] = useState('');

  const addTask = () => {
    toDoStore.addTask(task);
    setTask('');
  };

  const toggleTask = (id: string) => {
    toDoStore.toggleTaskCompletion(id);
  };

  const deleteTask = (id: string) => {
    toDoStore.deleteTask(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
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
});
