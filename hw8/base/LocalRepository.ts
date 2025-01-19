import LocalClient from "./LocalClient.ts";

export default class LocalRepository {
    localClient = new LocalClient();
    key = '';
    constructor(tableName:string) {
        this.localClient = new LocalClient();
        this.key = tableName;
    }
    getItems = () => {
        return this.localClient.get(this.key);
    };
    setItems = (data:string) => {
        return this.localClient.set(this.key, data);
    };
    removeAll = () => {
        return this.localClient.removeAll(this.key);
    };
}
