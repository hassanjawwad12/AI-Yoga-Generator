import React from 'react';
import CustomHeading from '../components/Headings';
import CustomButton from '../components/Buttons';
import {
  Box,
  Text,
  Flex,
  List,
  ListItem,
  HStack,
} from '@chakra-ui/react';
import Header from './Header';
import { getUserId, isAuthenticated } from '../functions/auth';

const Pricing = () => {
  const [loading, setLoading] = React.useState(false);
  const pricingData = [
    {
      id: 1,
      name: 'Basic',
      // price: '$9.99',
      // duration: '/mo',
      features: [
        'Access to basic yoga sequences',
        'Access to 3 free personalised yoga sequences',
      ],
    },
    {
      id: 2,
      name: 'Standard',
      price: '1500 INR',
      duration: '/mo',
      features: [
        'Access to basic yoga sequences',
        'Access to 15 personalised yoga sequences',
        'Advanced step-by-step pose guidance',
      ],
    },
    {
      id: 3,
      name: 'Premium',
      price: '3000 INR',
      duration: '/mo',
      features: [
        'All features of standard plan',
        'Access to unlimited personalised yoga sequences',
        'Complete access to yoga practice history',
        'Early access to new features and poses',
      ],
    },
  ];

  const createPayment = async (id) => {
    setLoading(true);
    const baseRoute = import.meta.env.VITE_API;
    const token = await isAuthenticated();
    if(!token) window.location.href = '/login';
    const response = await fetch(`${baseRoute}get_stripe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          access_token: token,
          planid: id,
          success_url: 'https://www.sudha.app/dashboard',
          cancel_url: 'https://www.sudha.app/payment',
        }
      ),
    });
    const data = await response.json();
    if(data.session_url !== undefined || data.session_url !== null){
      window.location.href = data.session_url;
    }
    setLoading(false);
  }

  const renderPricingBox = (plan) => (
    <Box
      id='pricing'
      key={plan.name}
      p={10}
      borderRadius="30"
      width="full"
      height="full"
      //   mx="2"
      backgroundColor="brand.600"
      display="flex"
      flexDirection="column"
    >
      <CustomHeading
        type="primary"
        fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: '2xl' }}
        text={plan.name}
      />
      <Text color="brand.200" fontWeight="700" fontSize={{ base: '2xl', sm: '2xl', md: '3xl', lg: '4xl' }} mt={2}>
        {plan.price} <span style={{ fontSize: '16px' }}>{plan.duration}</span>
      </Text>
      <List h="full" mt={4} textAlign="left" pl={4}>
        {plan.features.map((feature, index) => (
          <ListItem mt={4} key={index} display="flex" >
            <Box mr={2}>✓</Box>
            <Text>{feature}</Text>
          </ListItem>
        ))}
      </List>
      <CustomButton
        mt={6}
        type="primary"
        w="full"
        h={{ base: '42px', sm: '46px', md: '48px', lg: '50px' }}
        fontSize="xl"
        onClick={() => createPayment(plan.id)}
        btnname="Subscribe"
        isLoading={loading}
      />
    </Box>
  );

  return (
    <Box>
      <HStack justifyContent="center" my={8}>
        <CustomHeading
          px='3'
          py='2'
          rounded='full'
          type="primary"
          fontSize={{ sm: 'lg', md: 'xl', lg: '2xl' }}
          text="Pricing"
          color="brand.200"
          bg="brand.600"
        />
      </HStack>
      <Flex flexDirection={["column", "column", "column", "row"]} gap={["4", "4", "6", "4"]} w="full" justifyContent="center" alignContent="stretch" height="full" >
        {pricingData.map((plan) => renderPricingBox(plan))}
      </Flex>
    </Box>
  );
};

export default Pricing;
