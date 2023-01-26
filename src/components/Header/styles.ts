import { colors } from '@/styles/colors';
import Image from 'next/image';
import styled from 'styled-components';
import styledMap from 'styled-map';

import * as T from './types';

const Color = styledMap`
  black: ${colors.black};
  default: ${colors.white};
`;

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.default};
  padding: 28px 65px;

  @media (max-width: 768px) {
    padding: 28px 32.5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ShoppingCart = styled.button`
  border-radius: 8px;
  width: 90px;
  height: 45px;
  border: none;
  cursor: pointer;

  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  margin-right: 12px;
`;

export const SubTitle = styled.span<T.TextColor>`
  color: ${Color};
  font-weight: 300;
  font-size: 18px;
  line-height: 19px;
`;

export const Img = styled(Image)`
  cursor: pointer;
`;
