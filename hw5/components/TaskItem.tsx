import {Button, StyleSheet, Text, View} from 'react-native';
import TaskItemProps from './interfaces/TaskItemProps';

const TaskItem: React.FC<TaskItemProps> = ({item, onToggle, onDelete}) => (
  <View style={styles.taskContainer}>
    <Button
      title={item.completed ? 'Undone' : 'Done'}
      onPress={() => onToggle(item.id)}
    />
    <Text style={[styles.taskText, item.completed && styles.completedTaskText]}>
      {item.text}
    </Text>
    <Button title="Delete" color="red" onPress={() => onDelete(item.id)} />
  </View>
);

export default TaskItem;

const styles = StyleSheet.create({
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
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
