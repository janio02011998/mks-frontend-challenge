import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import * as T from './types';

import Bag from '../../../public/assets/icons/bag.svg';

import { actions as productActions } from '@/reducers/product';
import { RootState } from '@/reducers';

export default function Card(props: T.ICard) {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state);

  const { shoppingCart } = product;
  const { price, photo, name, description } = props;

  const handleItem = useCallback(() => {
    try {
      const isEmpty = shoppingCart?.length === 0;

      if (isEmpty) {
        console.log([{ ...props, count: 1 }]);

        dispatch(productActions.setShoppingCart([{ ...props, count: 1 }]));
      } else {
        const isAdded =
          shoppingCart.filter((item) => item.id === props.id).length > 0;

        if (isAdded) {
          const newArr = shoppingCart.map((item) => {
            if (item.id === props.id) {
              return { ...item, count: item.count + 1 };
            }
            return item;
          });
          dispatch(productActions.setShoppingCart(newArr));
        } else {
          dispatch(
            productActions.setShoppingCart([
              ...shoppingCart,
              { ...props, count: 1 },
            ])
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, props, shoppingCart]);

  return (
    <S.Container>
      <S.Img width={150} height={100} src={photo} alt="Product" />
      <S.Description>
        <S.Wrapper>
          <S.Title>{name}</S.Title>
          <S.PriceContent>
            <S.PriceText>R${~~price}</S.PriceText>
          </S.PriceContent>
        </S.Wrapper>
        <S.Text black>{description}.</S.Text>
      </S.Description>
      <S.WrapperBtn onClick={handleItem}>
        <S.Img src={Bag} alt="Bag shop icon" />
        <S.TextBtn>Comprar</S.TextBtn>
      </S.WrapperBtn>
    </S.Container>
  );
}
