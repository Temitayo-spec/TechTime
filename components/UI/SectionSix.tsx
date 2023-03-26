import styled from 'styled-components';
import connect from '@/public/images/connect.png';
import Image from 'next/image';
import Button from '../General/Button';

const SectionSix = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <H3>Join our community</H3>
          <H1>
            Are you ready to connect with the future talent of the tech world
          </H1>
          <P>meet up with other techstars and grow together</P>
        </Header>
        <ImageCtn>
          <Image src={connect} alt="connect" />
        </ImageCtn>
        <JoinBtn type="button">join our community</JoinBtn>
      </Inner>
    </Wrapper>
  );
};

export default SectionSix;

const Wrapper = styled.section`
  background: url('/images/minimal_pattern.png') var(--color-blue) no-repeat;
  background-size: cover;
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const H3 = styled.h3`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 18px;
  }
`;

const H1 = styled.h1`
  font-family: var(--tertiary-font);
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 69px;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 49px;
  }
`;

const P = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
`;

const ImageCtn = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const JoinBtn = styled(Button)`
  width: 220px;
  height: 54px;
  background: var(--color-white);
  color: var(--color-blue);

  &:hover {
    background: transparent;
    border: 1px solid var(--color-white);
    color: var(--color-white);
    width: auto;
  }
`;
