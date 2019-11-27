import shopData from './shopData';

const initialState = { collections: shopData };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
