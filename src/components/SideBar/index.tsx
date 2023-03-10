import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardNavBar from '@/components/CardNavBar';
import { actions as toolsActions } from '@/reducers/tools';
import priceTotal from '@/reducers/product/selectors/priceTotal';
import { RootState } from '@/reducers';

import Close from '../../../public/assets/icons/close.svg';

import * as S from './styles';

function SideBar() {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state);
  const { tools } = useSelector((state: RootState) => state);
  const total = useSelector(priceTotal);

  const handleSideBar = useCallback(() => {
    try {
      dispatch(toolsActions.setSideBarStatus(!tools.isSideBarOpen));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, tools.isSideBarOpen]);

  if (!tools.isSideBarOpen) return null;

  return (
    <S.Container>
      <S.Header>
        <S.Text>Carrinho de compras</S.Text>
        <S.Img src={Close} alt="Close navbar" onClick={handleSideBar} />
      </S.Header>
      <S.Content>
        <S.Main>
          {product?.shoppingCart?.map((item, index) => (
            <CardNavBar key={index} {...item} />
          ))}
        </S.Main>
        <S.Wrapper>
          <S.Text>Total </S.Text>
          <S.Text>R${total} </S.Text>
        </S.Wrapper>
      </S.Content>
      <S.Footer>
        <S.Text>Finalizar Compra</S.Text>
      </S.Footer>
    </S.Container>
  );
}

export default SideBar;
