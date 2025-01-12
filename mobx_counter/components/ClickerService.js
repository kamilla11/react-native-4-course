import {ClickerModel} from './ClickerModel';
import ClickerRepository from './ClickerRepository';

export default class ClickerService {
  clickerRepository; //private

  constructor() {
    this.clickerRepository = new ClickerRepository();
  }

  /**
   * @returns {ClickerModel}
   */
  getAndPrepareDataforStore = () => {
    const data = this.clickerRepository.getDataFromExtensialStorage();

    //factory logic
    const model = new ClickerModel();
    model.count = data.defaultCount;

    return model;
  };

  /**
   * @param model ClickerModel
   * @returns {ClickerModel}
   */
  incrementCountValue = model => {
    model.count++;
    return model;
  };
}
