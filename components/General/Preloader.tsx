import Image from 'next/image';
import styled from 'styled-components';
import techtime from '@/public/images/techtime.png';

interface PreloaderProps {
  preloader: boolean;
}

const Preloader = ({ preloader }: PreloaderProps) => {
  return (
    <Wrapper
      style={{
        display: preloader ? 'grid' : 'none',
      }}
    >
      <Inner>
        <Image src={techtime} alt="techtime_logo" />
      </Inner>
    </Wrapper>
  );
};

export default Preloader;

const Wrapper = styled.div`
  background: url('/images/minimal_pattern.png') var(--color-blue);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 999999;
`;

const Inner = styled.div``;
