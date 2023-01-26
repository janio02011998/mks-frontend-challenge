import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/reducers';
import { actions as productActions } from '@/reducers/product';

import * as S from './styles';
import * as T from './types';

import Close from '../../../public/assets/icons/close.svg';

export default function CardNavBar(props: T.ICard) {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state);
  const { price, photo, name } = props;

  const { shoppingCart } = product;

  const handleItem = useCallback(
    (operation: boolean) => {
      try {
        const newArr = shoppingCart.map((item) => {
          if (item.id === props.id) {
            if (operation) {
              return { ...item, count: item.count + 1 };
            } else {
              return { ...item, count: item.count - 1 };
            }
          }
          return item;
        });

        dispatch(productActions.setShoppingCart(newArr));
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch, props, shoppingCart]
  );

  return (
    <S.Container>
      <S.Img width={115} height={95} src={photo} alt="Product" />
      <S.ImgCard width={16} height={16} src={Close} alt="Close navbar" />
      <S.Title>{name}</S.Title>
      <S.Wrapper>
        <S.Count>Qtd: </S.Count>
        <S.Content>
          <S.Button onClick={() => handleItem(false)}>-</S.Button>
          <S.Line />
          <S.Count>{props.count}</S.Count>
          <S.Line />
          <S.Button onClick={() => handleItem(true)}>+</S.Button>
        </S.Content>
      </S.Wrapper>
      <S.PriceText>R${~~price}</S.PriceText>
    </S.Container>
  );
}
