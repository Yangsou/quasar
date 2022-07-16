import { EntryInterface } from './types';

export interface GlobalStateInterface {
  entries: EntryInterface;
}

function state(): GlobalStateInterface {
  return {
    entries: {
      items: [],
      limit: 20,
      skip: 0,
      total: 0,
    }
  }
}

export default state;
