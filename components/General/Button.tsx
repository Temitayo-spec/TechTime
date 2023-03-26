import { ButtonProps } from '@/utils/typings';
import styled from 'styled-components';

const Button = ({ className, type, children }: ButtonProps) => {
  return (
    <GeneralButton className={className} type={type}>
      {children}
    </GeneralButton>
  );
};

export default Button;

const GeneralButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  text-transform: capitalize;
  padding: 1rem 2rem;
  font-weight: 700;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: var(--primary-font);
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  width: auto;
`;
