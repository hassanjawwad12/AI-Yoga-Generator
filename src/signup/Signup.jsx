import React, { useEffect } from 'react';
import {
    Box,
    Center,
    VStack,
    Text,
    Link,
    HStack,
    useToast
} from '@chakra-ui/react';
import { AiOutlineGoogle } from 'react-icons/ai';
import CustomHeading from '../components/Headings';
import CustomButton from '../components/Buttons';
import CustomInput from '../components/Inputs';
import Header from '../components/Header';
import supabase from '../database/supabase';
import Footer from '../components/Footer';
import CustomFooter from '../components/CustomFooter';

const SignUpPage = () => {
    const toast = useToast();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSignUp = async () => {
        setLoading(true);
        const {error} = await supabase.auth.signUp(
            { 
                email, 
                password,
                options: {
                    data: {
                        name: name,
                    },
                    emailRedirectTo: 'http://localhost:3000/login'
                }
            }
        );
        if (error) {
            toast({
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        } else {
            setLoading(false);
            toast({
                title: 'Success',
                description: 'Please check your email for the confirmation link',
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
        }
        setLoading(false);
    }

    return (
        <>
        <VStack
            w={'full'}
            minHeight={'100vh'}
            background={'brand.100'}
            paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, '2xl': 56 }}
            paddingY={10}
            color={'brand.500'}>
            <Header />
            <Center
                flexGrow={1} // This allows the Center box to grow and take up the available space
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Box pb="16" pt="0">
                    <CustomHeading
                        letterSpacing="0.1rem"
                        textAlign="center"
                        type="primary"
                        fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: '3xl' }}
                        text="Signup"

                    />
                    <CustomButton
                        iconw="6"
                        iconh="6"
                        icon={AiOutlineGoogle}
                        type="tertiary"
                        btnname="Sign Up with Google"
                        mt="8"
                        boxShadow="0 0 0 1px #D6D6D6"
                    />
                    <HStack mt="2" spacing="4">
                        <hr style={{ flex: 1, borderTop: '1px solid #D8C183' }} />
                        <Text color="brand.400">or</Text>
                        <hr style={{ flex: 1, borderTop: '1px solid #D8C183' }} />
                    </HStack>
                    <VStack mt="4" spacing="4">
                        <VStack align="stretch">
                            <Text color="brand.400" textAlign="left">
                                Enter your Full Name
                            </Text>
                            <CustomInput
                                type="secondary"
                                case="email"
                                color="brand.1200"
                                border="none"
                                placeholder="John Doe"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </VStack>
                        <VStack align="stretch">
                            <Text color="brand.400" textAlign="left">
                                Enter your Email
                            </Text>
                            <CustomInput
                                type="secondary"
                                case="email"
                                color="brand.1200"
                                border="none"
                                placeholder="useremail@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </VStack>
                        <VStack spacing="2" align="stretch">
                            <Text color="brand.400" textAlign="left">
                                Password
                            </Text>
                            <CustomInput
                                type="secondary"
                                case="password"
                                border="none"
                                color="brand.1200"
                                placeholder="***************"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </VStack>
                    </VStack>
                    <CustomButton
                        type="primary"
                        width="full"
                        height={['60px']}
                        fontWeight={600}
                        fontSize={20}
                        btnname="Sign Up"
                        mt="8"
                        onClick={handleSignUp}
                        isLoading={loading}
                    />
                    <Text mt="4" color="brand.800" textAlign="center">
                        Already Have an Account? {' '}
                        <Link href='/login' fontWeight={600} color="brand.900">
                            Sign in
                        </Link>
                    </Text>
                </Box>
            </Center>
        
        </VStack>
        <CustomFooter />
        </>
    );
};

export default SignUpPage;
