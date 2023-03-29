import { FAQData } from '@/utils/FAQData';
import styled from 'styled-components';
import Accordion from '../../General/Accordion';

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
  background: url('/images/faq_decor_1.png') no-repeat,
    url('/images/faq_decor_2.png') no-repeat,
    url('/images/faq_decor_3.png') no-repeat,
    url('/images/faq_decor_4.png') var(--color-white) no-repeat;
  background-position: 0 30%, 90% 10%, 90% 85%, 100% 30%;
  padding: 2rem 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 3rem 0;
    background-position: 0 25%, 90% 5%, 90% 85%, 100% 30%;
    background-size: 30px, 20px, 5px;
  }
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

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
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

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 16px;
    width: 90%;
  }
`;
