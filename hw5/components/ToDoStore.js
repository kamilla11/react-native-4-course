import {makeAutoObservable} from 'mobx';

export class ToDoStore {
  //observable value
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  //action
  addTask(text) {
    if (text.trim() !== '') {
      const newTask = {
        id: Date.now().toString(),
        text,
        completed: false,
      };
      this.setTasks([...this.tasks, newTask]);
    }
  }

  //action
  deleteTask(id) {
    this.setTasks(this.tasks.filter(task => task.id !== id));
  }

  //action
  toggleTaskCompletion(id) {
    const updatedTasks = this.tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task,
    );
    this.setTasks(updatedTasks);
  }

  //setter
  setTasks = value => {
    this.tasks = value;
  };
}
