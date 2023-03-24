import { Hero, Navbar } from '@/components';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <SectionOne>
        <Navbar />
        <Hero />
      </SectionOne>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-blue);
`;
