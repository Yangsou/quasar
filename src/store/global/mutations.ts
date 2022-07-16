import { Entry } from 'contentful';
import { cloneDeep } from 'lodash';
import { MutationTree } from 'vuex';
import { GlobalStateInterface } from './state';
import { EntryInterface, GlobalMutationType } from './types';

const mutation: MutationTree<GlobalStateInterface> = {
  [GlobalMutationType.SET_ENTRIES](state, payload: EntryInterface) {
    state.entries = payload;
  },
  [GlobalMutationType.UPDATE_ENTRY](state, payload: Entry<unknown>) {
    const entries = cloneDeep(state.entries.items),
      index = entries.findIndex((el) => el.sys.id === payload.sys.id);
    if (index > -1) {
      entries[index] = {
        ...entries[index],
        ...payload
      }
    } else {
      entries.push(payload)
    }
    state.entries = {
      ...state.entries,
      items: entries
    }
  }
};

export default mutation;
