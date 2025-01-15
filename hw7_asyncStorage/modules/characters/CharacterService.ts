import CharacterRepository from './CharacterRepository.ts';
import LocalRepository from "../../base/LocalRepository.ts";

export default class CharacterService {
    characterRepository; //private
    localRepository;
    _localRepositoryKey = 'characters';

    constructor() {
        this.characterRepository = new CharacterRepository();
        this.localRepository = new LocalRepository(this._localRepositoryKey);
    }

    getCharacters = async () => {
        const res = await this.characterRepository.getCharacters();

        return res.data.results.slice(0, 10);
    };

    getCharactersFromLocalStorage = async () => {
        const res = await this.localRepository.getItems();
        return res ? res.slice(0, 10) : [];
    };

    loadCharactersToLocalStorage = async () => {
        const data = await this.getCharacters();
        await this.localRepository.setItems(data);
        const res = await this.localRepository.getItems();
    };

    removeCharactersFromLocalStorage = async () => {
        await this.localRepository.removeAll();
    };
}
