import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import styled from 'styled-components';

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';
import { testimonialData } from '@/utils/TestimonialData';
import Image from 'next/image';

const TestimonialCarousel = () => {
  // check if screen is in mobile view
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Wrapper>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={isMobile ? 30 : 30}
        freeMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper"
        style={{
          padding: isMobile ? '3rem 1rem' : '3rem 2rem',
        }}
      >
        {testimonialData.map((testimonial, key) => (
          <SwiperSlide key={key}>
            <SwiperInner>
              <TestimonialText>{testimonial.testimonial}</TestimonialText>
              <TestimonialAuthor>
                <TestimonialAuthorImage
                  src={testimonial.image}
                  alt="author_image"
                />
                <TestimonialAuthorDetails>
                  <TestimonialAuthorName>
                    {testimonial.name}
                  </TestimonialAuthorName>
                  <TestimonialAuthorPosition>
                    {testimonial.role}
                  </TestimonialAuthorPosition>
                </TestimonialAuthorDetails>
              </TestimonialAuthor>
            </SwiperInner>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default TestimonialCarousel;

const Wrapper = styled.div`
  width: 100%;
`;

const SwiperInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 332px;
    height: 100%;
  }
`;

const TestimonialText = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 26px;
  text-transform: capitalize;
  color: var(--color-gray);

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 14px;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;

const TestimonialAuthorImage = styled(Image)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const TestimonialAuthorDetails = styled.div`
  margin-left: 1rem;
`;

const TestimonialAuthorName = styled.h3`
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 19px;
  text-transform: capitalize;
  color: #000;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const TestimonialAuthorPosition = styled.p`
  font-family: var(--primary-font);
  color: var(--color-grey);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 16px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
