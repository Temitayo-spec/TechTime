import styled from 'styled-components';
import Link from 'next/link';
import { navData } from '@/utils/NavData';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <Wrapper>
      <Inner>
        <Logo>TechTime</Logo>
        <Nav>
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
            <Button type="button">Enroll Now</Button>
          </NavItem>
        </Nav>
      </Inner>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
`;

const Logo = styled.div`
  font-weight: 400;
  font-size: 3rem;
  text-transform: capitalize;
  color: var(--color-white);
  font-family: 'Amazing Kids';
  flex: 1;
`;

const Nav = styled.ul`
  flex: 2;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const Button = styled.button`
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
`;
