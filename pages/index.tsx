import { CompanyDisp, Hero, Navbar } from '@/components';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <SectionOne>
        <Navbar />
        <Hero />
      </SectionOne>
      <CompanyDisp />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
`;

const SectionOne = styled.div`
  width: 100%;
  background-color: var(--color-blue);
`;
