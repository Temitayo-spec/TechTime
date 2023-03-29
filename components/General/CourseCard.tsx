import Image from 'next/image';
import styled from 'styled-components';
import star from '@/public/svgs/ic-star-rating.svg';
import ic_schedule from '@/public/svgs/ic-schedule.svg';
import ic_menu_book from '@/public/svgs/ic_menu_book.svg';
import { CourseCardProps } from '@/utils/typings';

const CourseCard = ({
  image,
  categ,
  rating,
  people,
  courseTitle,
  duration,
  lessons,
  tutor,
  price,
}: CourseCardProps) => {
  return (
    <Wrapper>
      <Inner>
        <Image src={image} alt="image" />
        <FlexOne>
          <CategContainer>{categ}</CategContainer>
          <RatingContainer>
            <Rating>
              {rating}{' '}
              <span>
                <Image src={star} alt="star" />
              </span>
            </Rating>
            <People>({people}k+)</People>
          </RatingContainer>
        </FlexOne>
        <CourseTitle>{courseTitle}</CourseTitle>
        <FlexTwo>
          <Duration>
            <span>
              <Image src={ic_schedule} alt="ic_schedule" />
            </span>{' '}
            {duration}
          </Duration>
          <Lessons>
            <span>
              <Image src={ic_menu_book} alt="ic_menu_book" />
            </span>
            {lessons} Lessons
          </Lessons>
        </FlexTwo>
        <FlexThree>
          <Tutor>
            <span>
              <Image src={tutor.image} alt="tutor" />
            </span>
            {tutor.name}
          </Tutor>
          <Price>${price}.00</Price>
        </FlexThree>
      </Inner>
    </Wrapper>
  );
};

export default CourseCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-milk);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    border-radius: 7px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FlexOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 20px;
  background: rgba(30, 93, 206, 0.2);
  border-radius: 1rem;

  // text styles
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: capitalize;
  color: var(--color-blue);

  @media (max-width: 768px) {
    font-size: 4px;
    padding: 2px 8px 2px 8px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: capitalize;
  color: var(--color-grey);

  @media (max-width: 768px) {
    font-size: 4px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--primary-font);
`;

const People = styled.div``;

const CourseTitle = styled.div`
  font-family: var(--tertiary-font);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 30px;
  text-transform: capitalize;
  color: var(--color-deep-blue);

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 10px;
  }
`;

const FlexTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  text-transform: capitalize;
  color: var(--color-grey);

  @media (max-width: 768px) {
    font-size: 4px;

    img {
      height: 6.67px;
      width: 6.7px;
    }
  }
`;

const Lessons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  text-transform: capitalize;
  color: var(--color-grey);

  @media (max-width: 768px) {
    font-size: 4px;

    img {
      height: 6.67px;
      width: 6.7px;
    }
  }
`;

const FlexThree = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tutor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 1rem;
  line-height: 22px;
  text-transform: capitalize;

  span {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    font-size: 6px;

    span {
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

const Price = styled.div`
  font-family: var(--tertiary-font);
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 25px;
  text-transform: capitalize;
  color: var(--color-blue);

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
