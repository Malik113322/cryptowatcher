import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { server } from "../index";
import ErrorPage from './ErrorPage';
import Loader from './Loader';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const FetchAllExchanges = async () => {

      try {
        const { data } = await axios.get(`${server}/exchanges`)
        console.log(data)
        setExchanges(data)
        setLoading(false)
        
      } catch (error) {
        setError(true);
        setLoading(false)
      }
     
    };
    FetchAllExchanges();
  }, [])


  if(error) return <ErrorPage message={'Error while fetching exchanges'}/>

  return (
    <Container maxW={'container.xl'} textAlign={'center'}>

      {
        loading ? <Loader /> : <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {
            exchanges.map((i) => (
              <ExchangeCard name={i.name} imgSrc={i.image} url={i.url} rank={i.trust_score_rank} key={i.id} />
            ))
          }
        </HStack>
      }

    </Container>
  )

}


const ExchangeCard = ({ name, imgSrc, rank, url }) => (
  <a href={url} target={'blank'}>
    <VStack w={'52'} p={'8'} borderRadius={'lg'}
      boxShadow={'lg'} margin={'4'} transition={'all 0.1s'}
      css={{
        '&:hover': {
          transform: 'scale(1.1)'
        }
      }}
    >

      <Image
        w={'10'}
        h={'10'}
        objectFit={'contain'}
        src={imgSrc} alt="" />
      <Heading size={'md'} noOfLines={1} >{rank}</Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
)


export default Exchanges;



