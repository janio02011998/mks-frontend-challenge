import { IState } from '@/reducers/types';
import React from 'react';
import { useSelector } from 'react-redux';

import CardNavBar from '@/components/CardNavBar';

import Close from '../../../public/assets/icons/close.svg';

import * as S from './styles';

function NavBar() {
  const { product } = useSelector((state: IState) => state);

  return (
    <S.Container>
      <S.Header>
        <S.Text>Carrinho de compras</S.Text>
        <S.Img src={Close} alt="Close navbar" />
      </S.Header>
      <S.Content>
        <S.Main>
          {product?.shoppingCart?.map((item, index) => (
            <CardNavBar key={index} {...item} />
          ))}
        </S.Main>
        <S.Wrapper>
          <S.Text>Total </S.Text>
          <S.Text>R$798 </S.Text>
        </S.Wrapper>
      </S.Content>
      <S.Footer>
        <S.Text>Finalizar Compra</S.Text>
      </S.Footer>
    </S.Container>
  );
}

export default NavBar;
