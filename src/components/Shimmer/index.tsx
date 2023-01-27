import React from 'react';
import { ShimmerPostList } from 'react-shimmer-effects';

import * as S from './styles';

export default function Shimmer() {
  return (
    <S.Container>
      <S.Content>
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />;
      </S.Content>
    </S.Container>
  );
}
