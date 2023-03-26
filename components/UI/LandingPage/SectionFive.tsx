import styled from 'styled-components';
import TestimonialCarousel from '../../General/TestimonialCarousel';

const SectionFive = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <H1>what our clients are saying</H1>
          <P>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </P>
        </Header>
        <Content>
          <TestimonialCarousel />
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default SectionFive;

const Wrapper = styled.div``;

const Inner = styled.div``;

const Header = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  font-family: var(--tertiary-font);
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 69px;
  text-transform: capitalize;
  color: var(--color-deep-blue);
`;

const P = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  line-height: 28px;
  text-align: center;
  text-transform: capitalize;
  color: var(--color-gray);
  width: 55%;
  margin: 0 auto;
`;

const Content = styled.div``;
