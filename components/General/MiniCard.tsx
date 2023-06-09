import { CardProps } from '@/utils/typings';
import Image from 'next/image';
import styled from 'styled-components';

const MiniCard = ({ image, text }: CardProps) => {
  return (
    <Wrapper>
      <Inner>
        <Image src={image} alt="image" />
        <TextContainer>{text}</TextContainer>
      </Inner>
    </Wrapper>
  );
};

export default MiniCard;

const Wrapper = styled.div`
  padding: 20px 56px 20px 24px;
  width: 232px;
  height: 72px;
  background: var(--color-white);
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  width: auto;

  @media (max-width: 768px) {
    padding: 8px 32px 8px 16px;
    gap: 8px;
    height: auto;
    border-radius: 4px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    img {
      width: 17.59px;
      height: 17.59px;
    }
  }
`;

const TextContainer = styled.div`
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 1rem;
  text-transform: capitalize;
  color: #000f24;

  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;
