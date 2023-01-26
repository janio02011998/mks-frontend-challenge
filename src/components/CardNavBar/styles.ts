import { colors } from '@/styles/colors';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 95px;
  padding: 12px;
  width: 379px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px;
  align-items: center;

  @media (max-width: 480px) {
    width: 95%;
    grid-template-columns: 1fr 1fr;
    height: auto;
  }
`;

export const Title = styled.span`
  color: ${colors.black};
  font-weight: 400;
  width: 85px;
  font-size: 13px;
  line-height: 17px;
`;

export const Count = styled.span`
  color: ${colors.black};
  font-weight: 400;
  font-size: 12px;
  line-height: 10.1px;
`;

export const PriceText = styled.span`
  color: ${colors.black};
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

export const Img = styled(Image)`
  cursor: pointer;
  object-fit: contain;
`;

export const ImgCard = styled(Image)`
  cursor: pointer;
  object-fit: contain;
  position: absolute;
  padding: 4px;
  background-color: ${colors.black};
  border-radius: 50%;
  top: -8px;
  right: -8px;
  cursor: pointer;
`;

export const Wrapper = styled.div``;

export const Line = styled.div`
  border-left: 0.2px solid ${colors.lightGray};
  width: 3.5px;
  height: 12px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 19px;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;
