import { ContentfulClientApi, createClient } from 'contentful';

let contentfulApp: ContentfulClientApi;

export const GetContentfulApp = () => {
  if (!contentfulApp) {
    contentfulApp = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: 'jkfhzam7uuko',
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: 'GgqISh2nG2cAKo1nJ3rTh_98o993tXNr4HHyGw1WMkU',
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
};
