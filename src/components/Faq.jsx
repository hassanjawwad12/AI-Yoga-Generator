import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import CustomHeading from '../components/Headings';
import CustomButton from '../components/Buttons';

const faqItems = 
  [
    {
      "question": "What is Sudha?",
      "answer": "Sudha is a personalized yoga sequence generator designed to tailor yoga routines based on your unique energy, mood, and health conditions."
    },
    {
      "question": "Who is this app for?",
      "answer": "Our app is ideal for busy professionals who are looking to seamlessly integrate yoga into their active lifestyles. However, anyone interested in personalized yoga sequences can benefit from our app!"
    },
    {
      "question": "How does the app personalize yoga sequences for me?",
      "answer": "Using advanced AI algorithms, our app takes into consideration various factors like your mood, energy level, and any health conditions you might have. Based on this information, it crafts a sequence best suited to your needs."
    },
    {
      "question": "Is there a cost to use the app?",
      "answer": "We offer a freemium model where basic features are available for free. For advanced personalization and additional features, we have subscription plans available."
    },
    {
      "question": "Is my data safe and private?",
      "answer": "Absolutely! We prioritize user privacy and ensure all personal data is encrypted and stored securely. We never share your data with third parties without your explicit consent."
    },
    {
      "question": "Do I need any yoga experience to use the app?",
      "answer": "No! Our app caters to both beginners and experienced yoga practitioners. The sequences are tailored to your comfort and experience level."
    },
    {
      "question": "Can I use the app on all devices?",
      "answer": "Yes, our web app is designed to be responsive and works seamlessly on smartphones, tablets, and desktops."
    },
    {
      "question": "How often should I use the app?",
      "answer": "This is subjective and depends on your personal goals. However, for best results, we recommend using the app regularly to maintain a consistent yoga routine."
    },
    {
      "question": "What if I have a medical condition?",
      "answer": "Our app does consider health conditions when generating sequences, but it's always recommended to consult with a healthcare professional before starting any new fitness regimen."
    },
    {
      "question": "How do I report issues or provide feedback?",
      "answer": "We value user feedback! If you encounter any issues or have suggestions, please reach out to us at [support email] or through our contact form."
    },
    {
      "question": "Are there any discounts for yearly subscriptions?",
      "answer": "Yes! Users opting for annual subscriptions receive a discounted rate compared to monthly subscriptions. Check our pricing page for more details."
    },
    {
      "question": "Can I cancel my subscription at any time?",
      "answer": "Yes, you can cancel your subscription at any point. If you're on a monthly plan, you won't be charged for the subsequent month. For yearly subscribers, please check our refund policy."
    },

  ]
  

const FAQ = () => {
  return (
    <Box mb={'16'} px={{ base: 4, md: 16, lg: 24 }} py={12}  id='faq'>
      <HStack justifyContent="center" my={8}>
        <CustomHeading
          px='3'
          py='2'
          rounded='full'
          type="primary"
          fontSize={{ sm: 'lg', md: 'xl', lg: '2xl' }}
          text="FAQ"
          color="brand.200"
          bg="brand.600"
        />
      </HStack>
      {faqItems.map((item, index) => (
        <Box key={index} mb={8}>
          <CustomHeading
            type="primary"
            fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}
            letterSpacing={['0.1em', '0.04em', '0.03em', '0.02em']}
            text={item.question}
          />
          <Text letterSpacing={['0.08em', '0.04em', '0.03em', '0.02em']} mt={2} fontFamily='fonts.text' fontSize={['sm', 'md', 'md', 'md']} color="brand.500">
            {item.answer}
          </Text>

        </Box>
      ))}
    </Box>
  );
};

export default FAQ;
