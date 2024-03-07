import commonSlicer from './slicer';

export default commonSlicer.reducer;
export const {
  setCartItems,
  setMockData,
  incrementCount,
  decrementCount,
  setFavoriteProducts,
  setProductLimitReached,
} = commonSlicer.actions;
