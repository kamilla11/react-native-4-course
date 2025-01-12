import React from 'react';
import {ToDoStore} from './ToDoStore';

class RootStore {
  toDoStore;

  constructor() {
    this.toDoStore = new ToDoStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
