import {makeAutoObservable} from 'mobx';
import {LangType} from "./LangType.ts";
import LangService from "./LangService.ts";

export class LangStore {
    //observable value
    lang: LangType = LangType.RU;

    private langService: LangService; //private

    constructor() {
        makeAutoObservable(this);

        this.langService = new LangService();
    }

    get currentLangObj() {
        return this.lang;
    }

    changeLang = async (lang: LangType) => {
        this.setLang(lang);

        try {
            return await this.langService
                .changeLang(lang);
        } catch (err) {
            console.log('ERR changeLang', err);
            return false;
        }
    }

    sync = async () => {
        const lang = await this.langService.getLang();
        await this.changeLang(lang ?? LangType.RU);
    }

    private setLang = (lang: LangType) => {
        this.lang = lang;
    }
}
