import { HStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={'6'} bgColor={'blackAlpha.900'} color={'white'} fontWeight={'700'}
    >
      <Link to={'/'}>Home</Link>
      <Link to={'/exchanges'}>Exchanges</Link>
      <Link to={'/coins'}>Coins</Link>
    </HStack>
  )
}

export default Header;
