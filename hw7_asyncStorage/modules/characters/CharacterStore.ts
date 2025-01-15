import {makeAutoObservable} from 'mobx';
import CharacterService from './CharacterService.ts';
import {CharacterModel} from './CharacterModel';

export class CharacterStore {
    //observable value
    characters: CharacterModel[]; //CharacterModel

    //observable value
    isLoading = false;

    characterService; //private

    constructor() {
        makeAutoObservable(this);

        this.characterService = new CharacterService();
        this.characters = [];
        this.isLoading = false;
    }

    getCharactersFromApi = () => {
        this.setIsLoading(true);

        this.characterService
            .getCharacters()
            .then(result => {
                this.setCharacters(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    getCharactersFromLocalStorage = () => {
        this.setIsLoading(true);

        this.characterService
            .getCharactersFromLocalStorage()
            .then(result => {
                this.setCharacters(result);
            })
            .catch(error => {
                this.setCharacters([]);
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    loadCharactersToLocalStorage = () => {
        this.setIsLoading(true);

        this.characterService
            .loadCharactersToLocalStorage()
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    removeCharactersFromLocalStorage = () => {
        this.setIsLoading(true);

        this.characterService
            .removeCharactersFromLocalStorage()
            .then(result => {
                this.setCharacters([]);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    }

    //setter
    setCharacters = (value: CharacterModel[]) => {
        this.characters = value;
    };

    //setter
    setIsLoading = (value: boolean) => {
        this.isLoading = value;
    };
}
