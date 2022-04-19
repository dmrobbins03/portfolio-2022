// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Imports
import { documentDetailPages, documentSingletonPages } from './documents';
import { fields } from './fields';
import { modules } from './modules';
import { references } from './references';
import { settingsModules, settingsSingletons } from './settings';

// Organize Imports for Desk Structure
export const singletons = [...documentSingletonPages, ...settingsSingletons];
export const singletonTemplateIds = singletons.map((a) => a.name);

// Admin controls (not pages) are visually up higher, followed by landing pages, then detail pages
export const adminSingletons = [...settingsSingletons];
export const adminSingletonTemplateIds = adminSingletons.map((a) => a.name);

// References that should not be accessed as pages (such as an author object)
export const nonPageReferences = [...references];
export const nonPageReferenceTemplateIds = nonPageReferences.map((a) => a.name);

// Manual or non-document template id's. example: for image tags
export const manuallyHiddenTemplateIds = ['media.tag'];

// Nested Panels
export const groups = []; // TODO: figure out page groups

/*

export const groups = [
  {
    title: 'News',
    children: [
      {
        title: 'Blog Posts',
        schema: blogDetail,
      },
      {
        title: 'News Posts',
        schema: newsDetail,
      },
    ],
  },
  {
    title: 'Resources',
    children: [
      {
        title: 'Webinars',
        schema: webinarsDetail,
      },
      {
        title: 'Whitepapers',
        schema: whitepapersDetail,
      },
    ],
  },
];

*/

export const groupDetailTemplateIds = [];
for (const group of groups) {
  for (const child of group.children) {
    const childName = child.schema?.name ?? null;
    if (childName) groupDetailTemplateIds.push(childName);
  }
}

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ...documentDetailPages,
    ...documentSingletonPages,
    ...fields,
    ...modules,
    ...references,
    ...settingsModules,
    ...settingsSingletons,
  ]),
});
