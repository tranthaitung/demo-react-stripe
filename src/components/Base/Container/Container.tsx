import React from 'react';
import styled from 'styled-components';

import mediaQueries from '@/styles/mediaQueries';

interface IContainerProps {
  fluid?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type IContainerStyledProps = Omit<IContainerProps, 'className' | 'children'>;

export const ContainerStyled = styled.div<IContainerStyledProps>`
  margin: 25px auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: ${props => (props.fluid ? '100%' : '540px')};

  ${props => mediaQueries('sm')(`max-width: ${props.fluid ? '100%' : '720px'};`)}

  ${props => mediaQueries('md')(`max-width: ${props.fluid ? '100%' : '960px'};`)}

  ${props => mediaQueries('lg')(`max-width: ${props.fluid ? '100%' : '1140px'};`)}
`;

export const Container: React.FC<IContainerProps> = props => {
  const { fluid, className, children } = props;
  return (
    <ContainerStyled fluid={fluid} className={className}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
