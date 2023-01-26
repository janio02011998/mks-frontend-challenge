import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles';
import * as T from './types';

import Bag from '../../../public/assets/icons/bag.svg';

import { actions as productActions } from '@/reducers/product';

export default function Card(props: T.ICard) {
  const dispatch = useDispatch();
  const { price, photo, name, description } = props;

  const handleItem = useCallback(() => {
    try {
      const shoppingCarts = [props];

      dispatch(productActions.setShoppingCart(shoppingCarts));
    } catch (e) {}
  }, [dispatch, props]);

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
