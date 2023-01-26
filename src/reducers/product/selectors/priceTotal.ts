import { RootState } from '@/reducers';
import { createSelector } from '@reduxjs/toolkit';

const priceTotal = createSelector(
  (state: RootState) => state.product,
  (product) => {
    const { shoppingCart } = product;

    if (!shoppingCart) return 0;

    let total = 0;

    shoppingCart.forEach((item) => {
      total = item.count * ~~item.price + total;
    });

    return total;
  }
);

export default priceTotal;
