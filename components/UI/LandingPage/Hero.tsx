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
          <Image src={hero_img} alt="users" height={886} width={705.33} />
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
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3em;
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
    top: -80px;
    object-fit: contain;
  }

  &:nth-child(2) {
    img {
      right: 100px;
    }
  }
`;

const Left = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  font-family: var(--tertiary-font);
  font-weight: 700;
  font-size: 4rem;
  line-height: 82px;
  color: #ffffff;
`;

const SubTitle = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1em;
  line-height: 26px;
  text-transform: capitalize;
  color: var(--color-whitesmoke);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 2em;
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
`;

const Users = styled.div`
  width: auto;
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
  }
`;

const StatsTitle = styled.h3`
  font-family: var(--tertiary-font);
  font-weight: 700;
  font-size: 2rem;
  line-height: 26px;
  color: var(--color-white);
`;

const Right = styled.div`
  width: 50%;
  margin-bottom: -120px;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
