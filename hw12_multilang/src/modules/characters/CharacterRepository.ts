import AxiosClient from '../../base/AxiosClient.ts';

export default class CharacterRepository {
    apiClient;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getCharacters = () => {
        return this.apiClient.get({url: '/character'});
    };
}
