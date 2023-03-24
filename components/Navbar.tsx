import styled from 'styled-components';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo>TechTime</Logo>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/farming">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/oils">Courses</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about_us">Community</NavLink>
          </NavItem>
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
  width: 90%;
  margin: 0 auto;
`;

const Logo = styled.div`
  flex: 1;
`;

const Nav = styled.ul`
  list-style: none;
  flex: 2;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)``;

const Button = styled.button``;
