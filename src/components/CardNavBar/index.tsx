import React from 'react';

import * as S from './styles';
import * as T from './types';

import Close from '../../../public/assets/icons/close.svg';

export default function CardNavBar(props: T.ICard) {
  const { price, photo, name } = props;
  return (
    <S.Container>
      <S.Img width={115} height={95} src={photo} alt="Product" />
      <S.ImgCard width={16} height={16} src={Close} alt="Close navbar" />
      <S.Title>{name}</S.Title>
      <S.Wrapper>
        <S.Count>Qtd: </S.Count>
        <S.Content>
          <S.Button>-</S.Button>
          <S.Line />
          <S.Count>1</S.Count>
          <S.Line />
          <S.Button>+</S.Button>
        </S.Content>
      </S.Wrapper>
      <S.PriceText>R${~~price}</S.PriceText>
    </S.Container>
  );
}
