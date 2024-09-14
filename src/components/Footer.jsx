import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

const Footer = () => {

   
  return (
    <Box 
    position="absolute"
    bottom={0}
    w={'full'} bg="brand.200"color="brand.300" py={4}>
      <Flex
        maxW={{ base: '100%', lg: '100%' }}
        mx={[10,12,14,16]}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left side: Company name */}
        <Link href="/" fontWeight="bold" fontSize="lg">Yoga Application</Link>

        {/* Right side: Navigation links */}
        <Flex fontWeight="semibold"  flexDirection="column" alignItems="flex-end">
          <Link href="/">Home</Link>
          <Link href='/#features' >Features</Link>
          <Link href="/#pricing" >Pricing</Link>
          <Link href="/#faq">FAQ</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
