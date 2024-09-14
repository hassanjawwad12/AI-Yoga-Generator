import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const CustomFooter = () => {
  
 return (
    <Box 
    position="absolute"
    bottom={0}
    //mt={8}
    w={'full'} bg="brand.200"color="brand.300" py={4}>
      <Flex
        maxW={{ base: '100%', lg: '100%' }}
        mx={[10,12,14,16]}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left side: Company name */}
        <Text fontWeight="bold" fontSize="lg">Yoga Application</Text>

        {/* Right side: Navigation links */}
        <Flex fontWeight="semibold"  flexDirection="column" alignItems="flex-end">
          <Link href="/">Home</Link>
          <Link href="/#features" >Features</Link>
          <Link href="/#price" >Pricing</Link>
          
        </Flex>
      </Flex>
    </Box>
  );
};

export default CustomFooter;
