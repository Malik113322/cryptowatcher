import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import IMG from "../assets/founder.jpg";

import React from 'react';

const Footer = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'}
            color={'whiteAlpha.900'}
            minH={'48'}
            px={'16'}
            py={['16', '8']}
        >
            <Stack direction={['column', 'row']}
                h={'full'}
                alignItems={'center'}
            >

                <VStack w={'full'} alignItems={['center', ['flex-start']]}>

                <Text fontWeight={'bold'}>About Us</Text>
                <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}> Crypto Watcher is the best crypto trading platform. We charge 50% low fees on one trade.</Text>
                <Text color={'coral'} fontSize={'2xl'} textAlign={['center', 'left']}> Crypto Watcher also support INR, USD & EURO</Text>
                </VStack>

                <VStack>
                    <Avatar boxSize={'28'} mt={['5', '2']} src={IMG} />
                    <Text fontSize={'md'} fontWeight={'700'} color={'orange'} textAlign={['center', 'center']}>Danish Malik</Text>
                    <Text>Founder</Text>
                </VStack>

            </Stack>

        </Box>
    )
}

export default Footer
