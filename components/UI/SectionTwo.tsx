import styled from 'styled-components';
import Button from '@/components/General/Button';
import MiniCard from '../General/MiniCard';
import { BottomData, TopData } from '@/utils/Card';
import Image from 'next/image';
import banner from '@/public/images/high_quality_hero.png';
import spot from '@/public/images/spot.png';
import crown from '@/public/images/crown.png';

const SectionTwo = () => {
  return (
    <Wrapper>
      <Inner>
        <Left>
          <LeftTextContainer>
            <Image src={crown} alt="crown" />
            <H2>High quality video, audio & live classes</H2>
            <P>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </P>
          </LeftTextContainer>
          <ViewCoursesBtn type="button">View Courses</ViewCoursesBtn>
          <CardContainer>
            {TopData.map((item, index) => (
              <MiniCard key={index} image={item.image} text={item.text} />
            ))}
          </CardContainer>
          <CardContainer>
            {BottomData.map((item, index) => (
              <MiniCard key={index} image={item.image} text={item.text} />
            ))}
          </CardContainer>
        </Left>
        <Right>
          <Image src={banner} alt="banner" />
          <Image src={spot} alt="spot" />
        </Right>
      </Inner>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url('/images/green_zig.png') no-repeat,
    url('/images/half_ellipse.png') no-repeat,
    url('/images/purple_circle.png') #f8f9fc no-repeat;
  background-position: top 100px right, bottom right, bottom 10% right 20%;
  padding: 100px 0;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

const Left = styled.div`
  width: 50%;
`;

const LeftTextContainer = styled.div`
  margin-bottom: 30px;
  position: relative;

  img {
    position: absolute;
    top: -25px;
    left: -38px;
  }
`;

const H2 = styled.h2`
  font-family: var(--tertiary-font);
  font-size: 56px;
  line-height: 70px;
  color: #000f24;
`;

const P = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  line-height: 28px;
  text-transform: capitalize;
  color: #a2a2a2;
`;

const ViewCoursesBtn = styled(Button)`
  background: #004db3;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: capitalize;
  color: var(--color-white);
  margin-bottom: 40px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #8ab0e2;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img:nth-child(1) {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }
  img:nth-child(2) {
    width: auto;
    position: absolute;
    left: 74%;
    bottom: 0;
    z-index: 1;
  }
`;
