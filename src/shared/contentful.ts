import { ContentfulClientApi, createClient } from 'contentful';
import { config } from './config';

let contentfulApp: ContentfulClientApi;

export const GetContentfulApp = () => {
  if (!contentfulApp) {
    contentfulApp = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: config.contenfulSpace as  string,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: config.contentFulAccessToken as string,
    });
  }

  return contentfulApp;
};

export const contentfulAPI = {
  getEntries: (options?: { limit?: number; skip?: number }) => {
    return GetContentfulApp().getEntries(options);
  },
  getEntry: (entryId: string) => {
    return GetContentfulApp().getEntry(entryId);
  },
  getAssetById: (id: string) => {
    return GetContentfulApp().getAsset(id);
  },
};
