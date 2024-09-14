import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import CustomHeading from '../components/Headings';
import CustomButton from '../components/Buttons';

const GetStarted = () => {
  const gradientTextContainerStyle = {
    background: `linear-gradient(150deg, #E2A80A 0%, #F07B3F 100%)`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block',
    fontWeight: 'bold', // Make the text bolder
  };

  return (
    <Box textAlign="center" py={10}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
        }}
      >
        <CustomHeading
          type="primary"
          fontSize={{ base: '3xl', sm: '3xl', md: '4xl', lg: '7xl' }}
          letterSpacing={['0.04em','0.04em','0.03em','0.02em']}
          text="Everybody is unique."
        />
        <CustomHeading
          type="primary"
          fontSize={{ base: '3xl', sm: '3xl', md: '4xl', lg: '6xl' }}
          lineHeight={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
          sx={gradientTextContainerStyle}
          text="And so must your yoga practice."
        />
          
        <Box maxW="container.md" px={8}>
          <Text letterSpacing={['0.09em','0.04em','0.03em','0.02em']} fontFamily='fonts.text' fontSize={['sm', 'sm', 'md', 'md']} color="brand.500">
          Embark on a transformative yoga journey personalised for you with our state-of-the-art
          AI-powered application. Simply share your mood, preferences, and specific needs, and allow
          our advanced AI-Guru, Sudha, to craft a sequence that resonates with your essence.
          Elevate your fitness routine and find balance through a yoga class designed just for you.

          </Text>
        </Box>
        <Stack spacing={4} mt={8}>
          <CustomButton
            type="primary"
            w={{ base: '150px', sm: '150px', md: '160px', lg: '188px' }}
            h={{ base: '44px', sm: '46px', md: '48px', lg: '54px' }}
            fontSize="xl"
            btnname="Get Started"
            onClick = {() => window.location.href='/signup'}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default GetStarted;
