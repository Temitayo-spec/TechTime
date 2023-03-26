import { courseButtonsData } from '@/utils/CourseButtonsData';
import { courseData } from '@/utils/CourseData';
import { useState } from 'react';
import styled from 'styled-components';
import CourseCard from '../General/CourseCard';
import Button from '../General/Button';

const SectionFour = () => {
  const [tag, setTag] = useState('all');
  return (
    <Wrapper>
      <Inner>
        <Header>
          <Title>browse our popular courses</Title>
          <SubTitle>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </SubTitle>
        </Header>
        <ButtonContainer>
          {courseButtonsData.map((item, index) => (
            <TabButton
              className={item.tag === tag ? 'active' : ''}
              key={index}
              onClick={() => setTag(item.tag)}
            >
              {item.title}
            </TabButton>
          ))}
        </ButtonContainer>
        <CourseContainer>
          {courseData
            .filter((item) => item.categ === tag || tag === 'all')
            .map((item, index) => (
              <CourseCard key={index} {...item} />
            ))}
        </CourseContainer>
        <ExploreButton>explore all courses</ExploreButton>
      </Inner>
    </Wrapper>
  );
};

export default SectionFour;

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-milk);
  padding: 2rem 0;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Title = styled.div`
  font-family: var(--tertiary-font);
  font-style: normal;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 69px;
  text-transform: capitalize;
  color: var(--color-deep-blue);
`;

const SubTitle = styled.div`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  line-height: 28px;
  text-align: center;
  text-transform: capitalize;
  color: var(--color-grey);
  width: 60%;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5em;
`;

const TabButton = styled.div`
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 1rem;
  line-height: 22px;
  text-transform: capitalize;
  color: var(--color-gray);
  border: none;
  background-color: transparent;
  cursor: pointer;

  &.active {
    color: var(--color-blue);
  }

  &:hover {
    color: var(--color-blue);
  }
`;

const CourseContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const ExploreButton = styled(Button)`
  width: 209px;
  height: 54px;
  background: var(--color-blue);
  color: #ffffff;
  margin-top: 2rem;

  &:hover {
    background: var(--color-deep-blue);
    color: #ffffff;
  }
`;
