import { defineStore } from 'pinia';
import { Entry } from 'contentful';
import { contentfulAPI } from 'src/shared/contentful';
import { cloneDeep } from 'lodash';
export type PostType = {
  title: string;
  description: string;
  slug: string;
  heroImage: {
    sys: EntrySys;
    fields: {
      file?: {
        url: string;
        contentType: string
      };
    };
  };
  body: string;
  author?: {
    fields?: { name?: string };
    sys: EntrySys;
  };
  publishDate: string;
};
export type EntrySys = {
  type: string;
  linkType: string;
  id: string;
};
export interface EntryInterface {
  items: Entry<PostType>[];
  limit: number;
  skip: number;
  total: number;
}
export type PostState = {
  entries: EntryInterface;
};
export const usePostStore = defineStore('post', {
  state: (): PostState => ({
    entries: {
      items: [],
      limit: 20,
      skip: 0,
      total: 0,
    },
  }),
  actions: {
    async getEntries() {
      try {
        const _entries = await contentfulAPI.getEntries() as EntryInterface;
        this.entries = _entries;
      } catch (error) {
        console.log(error);
      }
    },
    async getEntryById(id: string) {
      try {
        const entry = (await contentfulAPI.getEntry(id)) as Entry<PostType>;
        const entries = cloneDeep(this.entries.items),
          index = entries.findIndex((el) => el.sys.id === entry.sys.id);
        if (index > -1) {
          entries[index] = {
            ...entries[index],
            ...entry,
          };
        } else {
          entries.push(entry);
        }
        this.entries = {
          ...this.entries,
          items: entries,
        };
      } catch (error) { }
    },
  },
  getters: {
    getEntryLocalById(state: PostState) {
      return (id: string) => state.entries.items.find((e) => e.sys.id === id);
    },
    interestingPosts(state: PostState) {
      return (id: string) => state.entries.items?.filter((e) => e.sys?.id !== id).slice(0, 3);
    },
  },
});
