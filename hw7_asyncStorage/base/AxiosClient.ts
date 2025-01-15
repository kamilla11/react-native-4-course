import axios, {AxiosRequestConfig} from 'axios';
import {Platform} from 'react-native';

export default class AxiosClient {
    static SUCCESS_STATUSES = [200, 201]; //readonly
    static SERVER_ERROR = 500; //readonly

    api; //AxiosINSTANCE;

    constructor(config?: AxiosRequestConfig) {
        this.api = axios.create(config);
        this.api.defaults.baseURL = this.getDefaultBaseUrl();
        this.api.defaults.headers.common['App-Platform'] = Platform.OS;
        this.api.defaults.headers.common['Content-Type'] = 'application/json';
    }
    getDefaultBaseUrl = () => {
        return 'https://rickandmortyapi.com/api';
    };

    get = (config:any) => {
        return this.api.get(config.url, config.config);
    };
    post = (config:any) => {
        return this.api.post(config.url, config.data, config.config);
    };

    put = (config:any) => {
        return this.api.put(config.url, config.data, config.config);
    };

    delete = (config:any) => {
        return this.api.delete(config.url, config.config);
    };
}
