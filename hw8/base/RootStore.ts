import React from 'react';
import {CharacterStore} from '../modules/characters/CharacterStore.ts';

class RootStore {
  characterStore;

  constructor() {
    this.characterStore = new CharacterStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
