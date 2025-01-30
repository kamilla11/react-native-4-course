import React from 'react';
import {CharacterStore} from '../modules/characters/CharacterStore.ts';
import {LangStore} from "../modules/lang/LangStore.ts";

class RootStore {
  characterStore;
  langStore;

  constructor() {
    this.characterStore = new CharacterStore();
    this.langStore = new LangStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
