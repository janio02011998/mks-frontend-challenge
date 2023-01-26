import React from 'react';

import ShoppingCart from '../../../public/assets/icons/cart.svg';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>MKS</S.Title>
        <S.SubTitle>Sistemas</S.SubTitle>
      </S.Wrapper>
      <S.ShoppingCart>
        <S.Img src={ShoppingCart} alt="Shopping Cart" />
        <S.SubTitle black>0</S.SubTitle>
      </S.ShoppingCart>
    </S.Container>
  );
}
