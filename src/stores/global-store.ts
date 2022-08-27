import { defineStore } from 'pinia';

export type GlobalStoreType = {
  footer: {
    title: string,
  },
  imageCaches: Record<string, string>;
}

export const useGlobalStore = defineStore('global', {
  state: (): GlobalStoreType => ({
    footer: {
      // title: 'Let\'s make something \namazing together',
      title: '',
    },
    imageCaches: {}
  }),
});
