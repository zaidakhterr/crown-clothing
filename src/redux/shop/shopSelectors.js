import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollectionsAsArray = createSelector(
  selectCollections,
  collections => Object.values(collections)
);

export const selectCollection = collectionUrl =>
  createSelector(selectCollections, collections => collections[collectionUrl]);
