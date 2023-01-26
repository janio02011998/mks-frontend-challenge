import { IProduct } from '@/reducers/product/types';
import React from 'react';
import Card from '../Card';

import * as S from './styles';
import * as T from './types';

export default function MarketPlace(props: T.IMarketPlace) {
  const { products } = props;

  return (
    <S.Container>
      <S.Content>
        {products.map((item, key) => (
          <Card key={key} {...item} />
        ))}
      </S.Content>
    </S.Container>
  );
}
