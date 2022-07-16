import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { GlobalStateInterface } from './state';

const getters: GetterTree<GlobalStateInterface, StateInterface> = {
  getEntryById(state) {
    return (id: string) => state.entries.items.find((e) => e.sys.id === id);
  }
};

export default getters;
