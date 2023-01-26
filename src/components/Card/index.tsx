import React from 'react';

import * as S from './styles';
import * as T from './types';

import Bag from '../../../public/assets/icons/bag.svg';

export default function Card(props: T.ICard) {
  const { price, photo, name, description } = props;
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
      <S.WrapperBtn>
        <S.Img src={Bag} alt="Bag shop icon" />
        <S.TextBtn>Comprar</S.TextBtn>
      </S.WrapperBtn>
    </S.Container>
  );
}
