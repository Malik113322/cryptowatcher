import { Box, Flex, Image, Text } from '@chakra-ui/react';
import btcSrc from "../assets/Bitcoin.jpg"

import React from 'react'

const Home = () => {
  return (
    <Box w={'full'} h={'85vh'} bgColor={'blackAlpha.600'} >
      <Image src={btcSrc} w={'full'} h={'full'} objectFit={'cover'} />

<Flex textAlign={'center'} alignItems={'center'} justifyContent={'center'}>
      <Text color={'yellow'} 
        fontWeight={'bold'}
        fontSize={'4xl'}
        mt={'-100'}
        mx={'4'}
      >
        Crypto
      </Text>

      <Text color={'green'} 
        fontWeight={'bold'}
        fontSize={'4xl'}
        mt={'-100'}
      >
         Watcher
      </Text>

      </Flex>
    </Box>
  )
}

export default Home;