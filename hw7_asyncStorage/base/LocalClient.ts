import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalClient {
    get = async (key:string) => {
        const data = await AsyncStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    };
    set = async (key:string, data:any) => {
        return AsyncStorage.setItem(key, JSON.stringify(data));
    };
    removeAll = async (key:string) => {
        return AsyncStorage.removeItem(key);
    };
}
