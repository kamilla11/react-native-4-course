import {makeAutoObservable} from 'mobx';
import CharacterService from './CharacterService';
import {CharacterModel} from './CharacterModel';

export class CharacterStore {
    //observable value
    characterModel = null; //CharacterModel

    //observable value
    isLoading = false;

    characterService; //private

    constructor() {
        makeAutoObservable(this);

        this.characterService = new CharacterService();
    }

    getCharacters = () => {
        this.setIsLoading(true);

        this.characterService
            .getCharacters()
            .then(result => {
                const model = new CharacterModel();
                model.characters = result;
                this.setCharacterModel(model);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    //setter
    setCharacterModel = value => {
        this.characterModel = value;
    };

    //setter
    setIsLoading = value => {
        this.isLoading = value;
    };
}
