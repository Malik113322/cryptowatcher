import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react'

const ErrorPage = ({message}) => {
  return (
   <Alert w={'container.lg'} status='error' pos={'fixed' } bottom={'4'} left={'50%'} transform="translate(-50%)">
    <AlertIcon />
    {message}
   </Alert>
  )
};

export default ErrorPage;
