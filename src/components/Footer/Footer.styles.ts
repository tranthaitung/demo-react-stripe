import styled from 'styled-components';
import colors from '@/styles/colors';

export const FooterWrapStyled = styled.div`
  width: 100%;
  height: 48px;
  border-top: 1px solid ${colors.borderLine};
  background-color: ${colors.white};
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
