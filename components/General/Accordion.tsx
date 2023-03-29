import React, { useState } from 'react';
import styled from 'styled-components';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AccordionCtn>
      <AccordionItem>
        <DropdownBtn
          onClick={toggleAccordion}
          className={isExpanded ? 'expanded' : 'collapsed'}
        >
          {title}
          <span>{isExpanded ? '-' : '+'}</span>
        </DropdownBtn>
        <DropdownContent className={isExpanded ? 'expanded' : 'collapsed'}>
          {children}
        </DropdownContent>
      </AccordionItem>
    </AccordionCtn>
  );
};

export default Accordion;

const AccordionCtn = styled.div`
  width: 60%;
  margin: 0 auto;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AccordionItem = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const DropdownBtn = styled.button`
  width: 100%;
  border: none;
  background: var(--color-white);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  font-family: var(--primary-font);
  font-weight: 900;
  font-size: 1rem;
  line-height: 28px;
  color: var(--color-deep-blue);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.expanded {
    color: var(--color-blue);
  }

  &.collapsed {
    color: var(--color-deep-blue);
  }

  span {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 19px;
    padding: 1rem 0;
    text-align: left;
  }
`;

const DropdownContent = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-white);
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  line-height: 28px;
  color: var(--color-grey);
  text-transform: capitalize;
  overflow: hidden;

  &.expanded {
    max-height: 100%;
    padding: 1rem 2rem;
    transition: max-height 1s ease-in-out;
  }

  &.collapsed {
    max-height: 0;
    padding: 0;
  }

  & > p {
    width: auto;
  }

  @media (max-width: 768px) {
    &.expanded {
      font-size: 14px;
      line-height: 19px;
      padding: 1rem 0;
    }
  }
`;
