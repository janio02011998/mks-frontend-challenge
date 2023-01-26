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
  &:hover {
    transform: scale(1.05);
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 300ms;
  }
  height: 320px;
  width: 230px;
  padding-top: 6px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 192px;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 12px;
`;

export const WrapperBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
  cursor: pointer;
  width: 100%;
  height: 32px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${colors.default};
`;

export const PriceContent = styled.div`
  border-radius: 5px;
  width: 64px;
  height: 26px;
  background-color: ${colors.darkGray};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  color: ${colors.black};
  font-weight: 400;
  width: 124px;
  font-size: 16px;
  line-height: 19px;
`;

export const PriceText = styled.span`
  color: ${colors.white};
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
`;

export const Text = styled.span<T.TextColor>`
  color: ${Color};
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
`;

export const TextBtn = styled.span<T.TextColor>`
  color: ${Color};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  margin-left: 4px;
`;

export const Img = styled(Image)`
  cursor: pointer;
  object-fit: contain;
`;
