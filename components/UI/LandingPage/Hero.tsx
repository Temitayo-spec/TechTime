import Image from 'next/image';
import styled from 'styled-components';
import Button from '../../General/Button';
import arrow_outward from '@/public/svgs/ic-arrow_outward.svg';
import users_img from '@/public/images/users_img.png';
import hero_img from '@/public/images/hero_img.png';
import decor_one from '@/public/images/green_circle.png';
import decor_two from '@/public/images/orange_filled.png';

const Hero = () => {
  return (
    <Wrapper>
      <Inner>
        <Left>
          <DecorContainer>
            <Decor>
              <Image src={decor_one} alt="decor" />
            </Decor>
            <Decor>
              <Image src={decor_two} alt="decor" />
            </Decor>
          </DecorContainer>
          <Title>Grow your skills to advance your career path </Title>
          <SubTitle>
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </SubTitle>
          <ButtonContainer>
            <GetStarted type="button">
              Get Started
              <Image src={arrow_outward} alt="arrow" />
            </GetStarted>
            <EnrollButton type="button">Enroll Now</EnrollButton>
          </ButtonContainer>
          <Stats>
            <Users>
              <Image src={users_img} alt="users" />
            </Users>
            <StatsText>
              <StatsTitle>255k+</StatsTitle>
              <span>Previews</span>
            </StatsText>
          </Stats>
        </Left>
        <Right>
          <Image src={hero_img} alt="users" />
        </Right>
      </Inner>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  width: 100%;
  background: url('/images/hero_decor.png') no-repeat;
  background-position: center left;
  overflow: hidden;
  height: 100%;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3em;
  padding: 2rem 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 1rem;
    text-align: center;
    margin-bottom: -30px;
  }
`;

const DecorContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Decor = styled.div`
  left: 0;
  width: 100%;

  img {
    position: absolute;
    top: -20px;
    object-fit: contain;
  }

  &:nth-child(2) {
    img {
      right: 100px;
    }
  }

  @media (max-width: 768px) {
    img {
      top: -10px;
      left: 0;
    }

    &:nth-child(2) {
      img {
        right: 0;
        left: 90%
      }
    }
  }
`;

const Left = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
    margin: 1rem 0;
  }
`;

const Title = styled.h1`
  font-family: var(--tertiary-font);
  font-weight: 700;
  font-size: 4rem;
  line-height: 82px;
  color: var(--color-white);

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 46px;
  }
`;

const SubTitle = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1em;
  line-height: 26px;
  text-transform: capitalize;
  color: var(--color-whitesmoke);

  @media (max-width: 768px) {
    font-size: 0.625em;
    line-height: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 2em;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const GetStarted = styled(Button)`
  background-color: var(--color-blue);
  color: var(--color-whitesmoke);
  width: 216px;
  height: 54px;
  border: 1px solid var(--color-white);

  &:hover {
    background-color: var(--color-whitesmoke);
    color: var(--color-blue);
  }
`;

const EnrollButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-blue);
  width: 149px;
  height: 54px;

  &:hover {
    background-color: var(--color-blue);
    color: var(--color-whitesmoke);
    border: 1px solid var(--color-white);
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Users = styled.div`
  width: auto;

  @media (max-width: 768px) {
    width: 65%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const StatsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-family: var(--primary-font);
    font-weight: 500;
    font-size: 1em;
    line-height: 22px;
    text-transform: capitalize;
    color: var(--color-white);

    @media (max-width: 768px) {
      font-size: 0.625em;
      line-height: 15px;
    }
  }
`;

const StatsTitle = styled.h3`
  font-family: var(--tertiary-font);
  font-weight: 700;
  font-size: 2rem;
  line-height: 26px;
  color: var(--color-white);

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 20px;
  }
`;

const Right = styled.div`
  margin-bottom: -40px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: -10px;

    img {
      object-fit: cover;
      height: 100%;
    }
  }
`;
