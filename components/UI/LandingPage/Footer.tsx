import Image from 'next/image';
import styled from 'styled-components';
import ic_facebook from '@/public/svgs/ic-facebook.svg';
import ic_instagram from '@/public/svgs/ic-instagram.svg';
import ic_twitter from '@/public/svgs/ic-twitter.svg';
import ic_youtube from '@/public/svgs/ic-youtube.svg';
import ic_discord from '@/public/svgs/ic-discord.svg';
import techtime from '@/public/images/techtime.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLeft>
          <Image src={techtime} alt="techtime" />
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
  background: var(--color-deep-blue);
  padding: 3rem 0;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 1rem;
  padding: 2rem 0;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: contain;
  }
`;

const FooterText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: var(--color-white);
  margin-bottom: 1rem;
  font-family: var(--primary-font);
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 22px;
    width: 75%;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    gap: 2rem;
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

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    margin-top: 1rem;
  }
`;

const FooterMidLink = styled(Link)`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 30px;
  color: var(--color-white);
  margin-bottom: 1rem;
  font-family: var(--primary-font);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-blue);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 22px;
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FooterRightTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 39px;
  color: var(--color-white);
  margin-bottom: 1rem;
  font-family: var(--tertiary-font);

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    margin-top: 1rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1.2fr;
`;

const Input = styled.input`
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

  @media (max-width: 768px) {
    &::placeholder {
      text-transform: capitalize;
    }
  }
`;

const Button = styled.button`
  padding: 16px 0.2rem;
  width: 100%;
  height: 46px;
  background: #054fb3;
  border-radius: 0px 2px 2px 0px;
  border: none;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: capitalize;
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-blue);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 19px;
    padding: 16px 5px;
    height: 46px;
    border-radius: 0px 2px 2px 0px;
  }
`;
