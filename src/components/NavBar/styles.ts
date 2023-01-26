import { colors } from '@/styles/colors';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${colors.default};
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  top: 0;
  right: 0;
  height: 100vh;
  width: 486px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 360px;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  height: 120px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled(Image)`
  padding: 8px;
  width: 20px;
  height: 20px;
  background-color: ${colors.black};
  border-radius: 50%;
`;

export const Content = styled.div`
  flex: 1;
  padding: 45px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Main = styled.div``;

export const Footer = styled.button`
  background-color: ${colors.black};
  border: none;
  width: 100%;
  height: 97px;
`;

export const Text = styled.span`
  color: ${colors.white};
  font-weight: 700;
  line-height: 15px;
  font-size: 28px;
  cursor: pointer;
`;
