import { CardProps } from '@/utils/typings';
import Image from 'next/image';
import styled from 'styled-components';

const BigCard = ({ image, text, bigText }: CardProps) => {
  return (
    <Wrapper>
      <Inner>
        <Image src={image} alt="image" />
        <H3>{bigText}</H3>
        <TextContainer>{text}</TextContainer>
      </Inner>
    </Wrapper>
  );
};

export default BigCard;

const Wrapper = styled.div`
  padding: 1rem;
  background: var(--color-white);
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  width: auto;

  @media (max-width: 768px) {
    padding: 0.5rem;
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.3rem;

    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const H3 = styled.h3`
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 1rem;
  line-height: 22px;
  text-transform: capitalize;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TextContainer = styled.div`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 28px;
  text-transform: capitalize;
  color: var(--color-grey);

  @media (max-width: 768px) {
    font-size: 0.635rem;
    line-height: 16px;
  }
`;
