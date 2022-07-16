import { contentfulAPI } from 'src/shared/contentful';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { GlobalStateInterface } from './state';
import { GlobalActionType, GlobalMutationType } from './types';

const actions: ActionTree<GlobalStateInterface, StateInterface> = {
  async [GlobalActionType.GET_ENTRIES]({ commit }) {
    const entries = await contentfulAPI.getEntries();
    commit(GlobalMutationType.SET_ENTRIES, entries)
    //   firstEntryId = get(entries, 'items[1].sys.id');
    // const firstEntry = await contentfulAPI.getEntry(firstEntryId);
    // commit('SET_TITLE', get(firstEntry, 'fields.title'));
  },
  async [GlobalActionType.GET_ENTRY_BY_ID]({ commit }, id: string) {
    try {
      const entry = await contentfulAPI.getEntry(id);
      commit(GlobalMutationType.UPDATE_ENTRY, entry);
    } catch (error) {

    }
  }
};

export default actions;
