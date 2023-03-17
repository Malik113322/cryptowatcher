import { Button, Container, Heading, HStack, Image, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { server } from "../index";
import ErrorPage from './ErrorPage';
import Loader from './Loader';


const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('usd');
  const [page, setPage] = useState(1);

  const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$'

  const changePage = (page) => {
    setPage(page);
    setLoading(true)
  };

  const btns = new Array(123).fill(1);

  useEffect(() => {
    const FetchAllCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(true);
        setLoading(false)
      }
    };
    FetchAllCoins();
   
  }, [currency, page])


  if (error) return <ErrorPage message={'Error while fetching coins'} />


  return (
    <Container maxW={'container.xl'}>
      {
        loading ? (<Loader />) : (<>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={'usd'}>USD</Radio>
              <Radio value={'inr'}>INR</Radio>
              <Radio value={'eur'}>Euro</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {
              coins.map((i) => (
                <CoinCard id={i.id} name={i.name}
                  symbol={i.symbol} imgSrc={i.image}
                  price={i.current_price} key={i.id}
                  currencySymbol={currencySymbol} />
              ))
            }
            
          </HStack>
          <HStack w={'full'} overflowX={'auto'} p={'8'} >
            {
              btns.map((item, index) => (
                <Button bgColor={'blackAlpha.900'}
                  key={index}
                  color={'white'} onClick={() => changePage(index + 1)}>
                  {index + 1}
                </Button>
              ))
            }
          </HStack>

        </>
        )}

    </Container>
  )

}


const CoinCard = ({ id, symbol, name, imgSrc, price, currencySymbol = '₹' }) => (
  <Link to={`/coin/${id}`}>
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
      <Heading size={'md'} textTransform={'uppercase'} noOfLines={1} >{symbol}</Heading>
      <Text noOfLines={1} >{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : 'Na'}</Text>

    </VStack>
  </Link>

)


export default Coins;



