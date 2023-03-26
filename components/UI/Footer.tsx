import Image from 'next/image';
import styled from 'styled-components';
import ic_facebook from '@/public/svgs/ic-facebook.svg';
import ic_instagram from '@/public/svgs/ic-instagram.svg';
import ic_twitter from '@/public/svgs/ic-twitter.svg';
import ic_youtube from '@/public/svgs/ic-youtube.svg';
import ic_discord from '@/public/svgs/ic-discord.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLeft>
          <FooterLogo>TechTime</FooterLogo>
          <FooterText>
            Reach out to us on any of our social media networks
          </FooterText>
          <FooterSocial>
            <Image src={ic_facebook} alt="Facebook" />
            <Image src={ic_twitter} alt="Twitter" />
            <Image src={ic_youtube} alt="Youtube" />
            <Image src={ic_instagram} alt="Instagram" />
            <Image src={ic_discord} alt="Discord" />
          </FooterSocial>
        </FooterLeft>
        <FooterMid>
          <FooterMidTitle>Useful Links</FooterMidTitle>
          <FooterMidLink href="/">Home</FooterMidLink>
          <FooterMidLink href="/about">About Us</FooterMidLink>
          <FooterMidLink href="/courses">Our Courses</FooterMidLink>
          <FooterMidLink href="/testimonials">Testimonials</FooterMidLink>
          <FooterMidLink href="/community">Our Community</FooterMidLink>
        </FooterMid>
        <FooterMid>
          <FooterMidTitle>Community</FooterMidTitle>
          <FooterMidLink href="/help-center">Help Centers</FooterMidLink>
          <FooterMidLink href="/partners">Partners</FooterMidLink>
          <FooterMidLink href="/suggestion">Suggestion</FooterMidLink>
          <FooterMidLink href="/blog">Blog</FooterMidLink>
          <FooterMidLink href="/newsletter">Newsletter</FooterMidLink>
        </FooterMid>
        <FooterRight>
          <FooterRightTitle>Subscribe Us</FooterRightTitle>
          <Form>
            <Input type="email" placeholder="nft123@gmail.com" />
            <Button type="button">Send Message</Button>
          </Form>
        </FooterRight>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background: #000f24;
  padding: 3rem 0;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  gap: 1rem;
  padding: 2rem 0;
  width: 90%;
  margin: 0 auto;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  line-height: 47px;
  color: var(--color-white);
  margin-bottom: 1rem;
  font-family: var(--secondary-font);
`;

const FooterText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: var(--color-white);
  margin-bottom: 1rem;
  font-family: var(--primary-font);
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  img {
    width: 30px;
    height: 30px;
  }
`;

const FooterMid = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterMidTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 39px;
  color: var(--color-white);
  margin-bottom: 1rem;
  font-family: var(--tertiary-font);
`;

const FooterMidLink = styled(Link)`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 30px;
  color: var(--color-white);
  margin-bottom: 1rem;
  font-family: var(--primary-font);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-blue);
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterRightTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 39px;
  color: var(--color-white);
  margin-bottom: 1rem;
  font-family: var(--tertiary-font);
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 2;
  width: 100%;
  padding: 1rem;
  height: 46px;
  background: #2a2a2b;
  border: 1px solid #054fb3;
  border-radius: 2px 0px 0px 2px;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 0.875rem;
  outline: none;
`;

const Button = styled.button`
  flex: 1;
  padding: 16px 40px;
  width: 100%;
  height: 46px;
  background: #054fb3;
  border-radius: 0px 2px 2px 0px;
  border: none;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: capitalize;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-blue);
  }
`;
