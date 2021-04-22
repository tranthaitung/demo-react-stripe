import React from 'react';
import { ErrorMessageStyled } from './ErrorMessage.styles';

export interface ErrorMessageProps {
  className?: string;
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = props => {
  const { className, message } = props;
  return <ErrorMessageStyled className={className}>{message}</ErrorMessageStyled>;
};

export default ErrorMessage;
