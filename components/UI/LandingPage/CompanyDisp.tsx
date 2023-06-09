import { companyData } from '@/utils/CompanyData';
import Image from 'next/image';
import styled from 'styled-components';
import ParallaxComp from '../../General/ParallaxComp';

const CompanyDisp = () => {
  return (
    <Wrapper>
      <Inner>
        <ParallaxComp baseVelocity={1}>
          {companyData.map((item, index) => (
            <Image key={index} src={item.src} alt={item.alt} />
          ))}
        </ParallaxComp>
      </Inner>
    </Wrapper>
  );
};

export default CompanyDisp;

const Wrapper = styled.div`
  width: 100%;
  height: 158px;
  display: flex;
  align-items: center;
  background-color: var(--company-bg);

  @media (max-width: 768px) {
    height: 90px;
  }
`;

const Inner = styled.div`
  width: 80%;
  border-radius: 35%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 0;
  }
`;
