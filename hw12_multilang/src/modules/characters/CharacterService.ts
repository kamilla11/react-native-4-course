import CharacterRepository from './CharacterRepository';

export default class CharacterService {
    characterRepository; //private

    constructor() {
        this.characterRepository = new CharacterRepository();
    }

    getCharacters = async () => {
        const res = await this.characterRepository.getCharacters();

        return res.data.results.slice(0, 10);
    };
}
