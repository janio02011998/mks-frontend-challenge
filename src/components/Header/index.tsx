import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as toolsActions } from '@/reducers/tools';
import { RootState } from '@/reducers';

import ShoppingCart from '../../../public/assets/icons/cart.svg';

import * as S from './styles';
import { sumTotal } from '@/reducers/product/selectors';

export default function Header() {
  const dispatch = useDispatch();
  const { tools } = useSelector((state: RootState) => state);
  const total = useSelector(sumTotal);

  const handleSideBar = useCallback(() => {
    try {
      dispatch(toolsActions.setSideBarStatus(!tools.isSideBarOpen));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, tools.isSideBarOpen]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>MKS</S.Title>
        <S.SubTitle>Sistemas</S.SubTitle>
      </S.Wrapper>
      <S.ShoppingCart onClick={handleSideBar}>
        <S.Img src={ShoppingCart} alt="Shopping Cart" />
        <S.SubTitle black>{total || 0}</S.SubTitle>
      </S.ShoppingCart>
    </S.Container>
  );
}
