import {makeAutoObservable} from 'mobx';
import CharacterService from './CharacterService';
import {CharacterModel} from './CharacterModel';

export class CharacterStore {
    //observable value
    characters : CharacterModel[]; //CharacterModel

    //observable value
    isLoading = false;

    characterService; //private

    constructor() {
        makeAutoObservable(this);

        this.characterService = new CharacterService();
        this.characters = [];
        this.isLoading = false;
    }

    getCharacters = () => {
        this.setIsLoading(true);

        this.characterService
            .getCharacters()
            .then(result => {
                this.setCharacterModel(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    //setter
    setCharacterModel = (value: CharacterModel[]) => {
        this.characters = value;
    };

    //setter
    setIsLoading = (value: boolean) => {
        this.isLoading = value;
    };
}
