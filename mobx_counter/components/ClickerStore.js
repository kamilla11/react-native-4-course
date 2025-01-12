import {makeAutoObservable} from 'mobx';
import ClickerService from './ClickerService';

export class ClickerStore {
  //observable value
  clickerModel = null; //ClickerModel

  //observable value
  isLoading = false;

  clickerService; //private

  constructor() {
    makeAutoObservable(this);

    this.clickerService = new ClickerService();
  }

  //action
  getClickerObjectFromService = () => {
    const model = this.clickerService.getAndPrepareDataforStore();
    this.setClickerModel(model);
  };

  //action
  actionClick = () => {
    this.setIsLoading(true);

    const model = this.clickerService.incrementCountValue(this.clickerModel);
    this.setClickerModel(model);

    setTimeout(() => {
      this.setIsLoading(false);
    }, 1000);
  };

  //setter
  setClickerModel = value => {
    this.clickerModel = value;
  };

  //setter
  setIsLoading = value => {
    this.isLoading = value;
  };
}
