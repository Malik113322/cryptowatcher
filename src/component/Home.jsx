import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Video from '../assets/bitvideo.mp4';
import React from 'react'

const Home = () => {
  return (
    <Box w={'full'} h={'85vh'} bgColor={'blackAlpha.600'} >

      <video autoPlay loop style={{ width: '100%', height: '100%', objectFit: 'cover', overflowX: 'hidden' }} src={Video}></video>

      <Flex textAlign={'center'} alignItems={'center'} justifyContent={'center'}>
        <Text color={'yellow'}
          fontWeight={'bold'}
          fontSize={'4xl'}
          mt={'-100'}
          mx={'4'}
        >
          Crypto
        </Text>

        <Text color={'#ffff'}
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