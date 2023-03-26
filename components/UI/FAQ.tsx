import { FAQData } from '@/utils/FAQData';
import styled from 'styled-components';
import Accordion from '../General/Accordion';

const FAQ = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <H1>Frequently asked questions</H1>
          <P>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </P>
        </Header>
        {FAQData.map((item, index) => {
          return (
            <Accordion title={item.question} key={index}>
              {item.answer}
            </Accordion>
          );
        })}
      </Inner>
    </Wrapper>
  );
};

export default FAQ;

const Wrapper = styled.section`
  background: var(--color-white);
  padding: 2rem 0;
  width: 100%;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const H1 = styled.h1`
  font-family: var(--tertiary-font);
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 69px;
  text-transform: capitalize;
`;

const P = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  line-height: 28px;
  color: var(--color-grey);
  margin: 1rem 0;
  text-transform: capitalize;
  width: 60%;
  margin: 0 auto;
`;
