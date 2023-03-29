import Image from 'next/image';
import styled from 'styled-components';
import best_hero from '@/public/images/best_hero.png';
import { BigCardData } from '@/utils/Card';
import BigCard from '../../General/BigCard';

const SectionThree = () => {
  return (
    <Wrapper>
      <Inner>
        <Left>
          <LeftTextContainer>
            <H2>this is why we are best from others</H2>
            <P>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </P>
          </LeftTextContainer>
          <Image src={best_hero} alt="best_hero" />
        </Left>
        <Right>
          {BigCardData.map((item, index) => (
            <BigCard
              key={index}
              image={item.image}
              text={item.text}
              bigText={item.bigText}
            />
          ))}
        </Right>
      </Inner>
    </Wrapper>
  );
};

export default SectionThree;

const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f9fc;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  @media (max-width: 768px) {
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const LeftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H2 = styled.h2`
  font-family: var(--tertiary-font);
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 70px;
  text-transform: capitalize;
  color: var(--color-deep-blue);

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const P = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  line-height: 28px;
  text-transform: capitalize;
  color: var(--color-grey);

  @media (max-width: 768px) {
    font-size: 0.625em;
    line-height: 16px;
  }
`;

const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
