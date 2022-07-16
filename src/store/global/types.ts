import { Entry } from 'contentful';

export enum GlobalActionType {
  GET_ENTRIES = 'GET_ENTRIES',
  GET_ENTRY_BY_ID = 'GET_ENTRY_BY_ID'
}
export enum GlobalMutationType {
  SET_ENTRIES = 'SET_ENTRIES',
  UPDATE_ENTRY = 'UPDATE_ENTRY',
}
export interface EntryInterface {
  items: Entry<unknown>[],
  limit: number,
  skip: number,
  total: number
}
