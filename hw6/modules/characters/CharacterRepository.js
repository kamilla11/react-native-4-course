import AxiosClient from '../../utils/AxiosClient';

export default class CharacterRepository {
    apiClient = null;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getCharacters = () => {
        return this.apiClient.get({url: '/character'});
    };
}
