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
const Pricing = () => {
    const pricingData = [
        {
            name: 'Basic',
            price: '$9.99',
            duration: '/mo',
            features: [
                'Access to basic yoga sequences',
                '7 personalized sequences per month',
                'Pose breakdown for each sequence',
                'Community forum access',
            ],
        },
        {
            name: 'Standard',
            price: '$19.99',
            duration: '/mo',
            features: [
                '15 personalized yoga sequences',
                'Advanced step-by-step pose guidance',
                'Access to specialty sequences (e.g., prenatal, advanced)',
                'More accurate Model',
            ],
        },
        {
            name: 'Premium',
            price: '$29.99',
            duration: '/mo',
            features: [
                'All features from the Standard Plan',
                'Unlimited Yoga Sequences Generation',
                'Priority support',
                'Early access to new features and poses',
                'Exclusive access to masterclasses and workshops',
            ],
        },
    ];

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
                btnname="Subscribe"
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
