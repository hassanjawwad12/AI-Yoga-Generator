import React from 'react';
import { Box, Heading, Text, Flex, Image, HStack, Stack } from '@chakra-ui/react';
import CustomHeading from '../components/Headings';
import CustomButton from '../components/Buttons';

const FeatureRow = ({ title, text, image, reverse }) => {
  return (
    <Stack
      direction={{ base: 'column', lg: reverse ? 'row-reverse' : 'row' }}
      alignItems="center"
      justifyContent="space-between"
      spacing={6}
    >
      <Box flex="2" px="60px" p={{ base: 4, md: 8, lg: 10 }}>
        <CustomHeading
          type="primary"
          fontSize={{ base: 'xl', sm: '2xl', md: '2xl', lg: '4xl' }}
          letterSpacing={['0.1em','0.07em','0.06em','0.04em']}
          text={title}
        />
        <Text letterSpacing={['0.09em','0.05em','0.03em','0.02em']} mt="20px" fontFamily='fonts.text' fontSize={['sm', 'md', 'md', 'md']} color="brand.500">
          {text}
        </Text>
      </Box>
      <Image
        px={{base:'0px',lg:'60px'}}
        src={image}
        alt={title}
        w={["80%","80%","55%","55%"]} 
        h="60%"
      />
    </Stack>
  );
};

const OurFeatures = () => {
  return (
    <Box id='features' px={{ base: 4, lg: 16 }}>
      <HStack justifyContent="center" my={8}>
        <CustomHeading
          px='3'
          py='2'
          rounded='full'
          type="primary"
          fontSize={{  sm: 'lg', md: 'xl', lg: '2xl' }}
          text="Our Features"
          color="brand.200"
          bg="brand.600"
        />
      </HStack>
      <FeatureRow
        title="Personalized Pose Sequencing"
        text="Drawing from a vast library of yoga poses, our AI crafts sequences tailored to your specific preferences and goals. Whether you're a beginner or an advanced practitioner, receive a flow that challenges and nurtures you."
        image="pics1.png" // Replace with the actual image URL
        reverse={false}
      />
      <FeatureRow
        title="Customized Duration for Each Pose"
        text="Not all poses are created equal. Our app doesn't just select the poses for you but also suggests the optimal duration for each. Whether it's a brief moment of stillness or an extended hold, practice each pose with intention."
        image="pics2.png" // Replace with the actual image URL
        reverse={true}
      />
      <FeatureRow
        title="Detailed Pose Guidance"
        text="Dive deep into each pose with step-by-step instructions. Our application breaks down the essentials of every pose in the sequence, ensuring you're aligned, safe, and getting the most out of your practice."
        image="pics3.png" // Replace with the actual image URL
        reverse={false}
      />
    </Box>
  );
};

export default OurFeatures;
