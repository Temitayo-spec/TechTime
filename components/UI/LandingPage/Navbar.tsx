import styled from 'styled-components';
import Link from 'next/link';
import { navData } from '@/utils/NavData';
import { useRouter } from 'next/router';
import Button from '../../General/Button';
import ic_hamburger from '@/public/svgs/ic-hamburger.svg';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const { pathname } = useRouter();
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Wrapper>
      <Inner>
        <Logo>
          <h1>TechTime</h1>
          <Image
            onClick={() => setToggle(!toggle)}
            src={ic_hamburger}
            alt="ic_hamburger"
          />
        </Logo>
        <Nav className={toggle ? 'active' : ''}>
          {navData.map((item, index) => (
            <NavItem key={index}>
              <NavLink
                className={pathname === item?.path ? 'active' : ''}
                href={item.path}
              >
                {item.title}
              </NavLink>
            </NavItem>
          ))}
          <NavItem>
            <EnrollButton type="button">Enroll Now</EnrollButton>
          </NavItem>
        </Nav>
      </Inner>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: var(--color-blue);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: relative;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  position: relative;
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  h1 {
    font-weight: 400;
    font-size: 3rem;
    text-transform: capitalize;
    color: var(--color-white);
    font-family: 'Amazing Kids';

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  img {
    display: none;
  }

  @media (max-width: 768px) {
    img {
      display: block;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

const Nav = styled.ul`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    position: absolute;
    top: 95px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    gap: 1rem;
    border-radius: 4px;
    height: 0;
    overflow-y: hidden;
    padding: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    &.active {
      height: 55vh;
      padding: 1.5rem 0;
      opacity: 1;
    }
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 1em;
  color: var(--color-light-blue);

  &.active {
    color: var(--color-white);
  }

  &:hover {
    color: var(--color-white);
  }

  @media (max-width: 768px) {
    color: var(--color-blue);
    letter-spacing: 0.05em;

    &.active {
      color: var(--color-blue);
      font-weight: 900;
    }
  }
`;

const EnrollButton = styled(Button)`
  padding: 16px 32px;
  width: 145px;
  height: 54px;
  background: var(--color-white);
  border-radius: 4px;
  border: none;
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 1em;
  color: var(--color-blue);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-light-blue);
    color: var(--color-white);
  }

  @media (max-width: 768px) {
    background: var(--color-blue);
    color: var(--color-white);
  }
`;
