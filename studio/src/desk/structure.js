import S from '@sanity/desk-tool/structure-builder';

// icons
import { MdTag, MdWeb, MdSettings, MdOutlineHome } from 'react-icons/md';

import {
  adminSingletons,
  adminSingletonTemplateIds,
  groups,
  groupDetailTemplateIds,
  manuallyHiddenTemplateIds,
  nonPageReferenceTemplateIds,
  singletons,
  singletonTemplateIds,
} from '../../schemas/schema';

// take imports from schema and add icons according to name

const generateDashboardConfig = (listItems) => {
  const dashboardConfig = [];
  for (const schema of listItems) {
    let icon = MdWeb;
    switch (schema.name) {
      case 'home':
        icon = MdOutlineHome;
        break;
      case 'siteSettings':
        icon = MdSettings;
        break;
      default:
        icon = MdWeb;
        break;
    }
    dashboardConfig.push({
      icon,
      schema,
    });
  }
  return dashboardConfig;
};

// detect if document is part of the admin group
const isAdminItem = (listItem) => {
  return adminSingletonTemplateIds.indexOf(listItem.spec.id) >= 0;
};

// detect if document is part of singleton list
const isLandingPageItem = (listItem) => {
  return !isAdminItem(listItem);
};

// hide all singleton pages (documents array) from automatically generated document list
const dashboardHiddenTypes = (listItem) =>
  !groupDetailTemplateIds.includes(listItem.getId()) &&
  !manuallyHiddenTemplateIds.includes(listItem.getId()) &&
  !nonPageReferenceTemplateIds.includes(listItem.getId()) &&
  !singletonTemplateIds.includes(listItem.getId());

// generate singleton items based on schema
const singletonsDashboardConfig = generateDashboardConfig(singletons);
const singletonItems = [];
for (const documentDashboardConfig of singletonsDashboardConfig) {
  const documentSchema = documentDashboardConfig.schema;
  singletonItems.push(
    S.listItem()
      .title(documentSchema.title)
      .icon(documentDashboardConfig?.icon)
      .child(
        S.document()
          .title(documentSchema.title)
          .schemaType(documentSchema.name)
          .documentId(documentSchema.name)
      )
  );
}

// generate group items based on schema
const groupItems = [];
for (const group of groups) {
  const childrenItems = [];
  for (const child of group.children) {
    childrenItems.push(
      S.listItem()
        .title(child.title)
        .schemaType(child.schema.name)
        .child(S.documentTypeList(child.schema.name))
    );
  }
  groupItems.push(
    S.listItem()
      .title(`${group.title} Categories`)
      .child(S.list().title(group.title).items(childrenItems))
  );
}

// filter detail pages not already in groups
const remainingItems = S.documentTypeListItems().filter(dashboardHiddenTypes);

console.log(remainingItems);

// build admin structure
let baseList = [];
const pageSingletonItems = [
  ...singletonItems.filter((value) => isLandingPageItem(value)),
];
const adminSingletonItems = [
  ...singletonItems.filter((value) => isAdminItem(value)),
];

baseList.push(...pageSingletonItems);

if (groupItems.length) {
  baseList.push(S.divider());
  baseList.push(...groupItems);
}

if (remainingItems.length) {
  baseList.push(S.divider());
  baseList.push(...remainingItems);
}

if (adminSingletonItems.length) {
  baseList.push(S.divider());
  baseList.push(...adminSingletonItems);
}

// export admin structure
export default () => S.list().title('Base').items(baseList);
