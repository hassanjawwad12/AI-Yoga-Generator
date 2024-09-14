import React from 'react';
import {Box,Center,VStack, Text,Link,HStack, useToast } from '@chakra-ui/react';
import { AiOutlineGoogle } from 'react-icons/ai';;
import CustomHeading from '../components/Headings';
import CustomButton from '../components/Buttons';
import CustomInput from '../components/Inputs';
import Header from '../components/Header';
import supabase from '../database/supabase';
import Footer from '../components/Footer';
import CustomFooter from '../components/CustomFooter';

const LoginPage = () => {
    const toast = useToast();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleLogin = async () => {
        setLoading(true);
        const {error} = await supabase.auth.signInWithPassword(
            { 
                email, 
                password,
            }
        );
        if (error) {
            setLoading(false);
            toast({
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        } else {
            setLoading(false);
            window.location.href = '/dashboard';
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true);
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                // redirectTo: 'https://www.sudha.app/dashboard',
                redirectTo: 'http://localhost:5173/dashboard',
            }
        })
        if (error) {
            setLoading(false);
            toast({
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        } else {
            setLoading(false);
            window.location.href = '/dashboard';
        }
    }


    return (
        < VStack
        minHeight={'100vh'}
           
        >  
        
           <VStack
            w={'full'}
            
            background={'brand.100'}
            paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, '2xl': 56 }}
            paddingY={10}
            color={'brand.500'}
            
            
            >
                <Header />
                <Center
                    flexGrow={1} 
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
            
                >
                    <Box>
                        <CustomHeading
                            letterSpacing="0.1rem"
                            textAlign="center"
                            type="primary"
                            fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: '3xl' }}
                            text="Welcome back !"
                        />
                        <CustomButton
                            iconw="6"
                            iconh="6"
                            icon={AiOutlineGoogle}
                            type="tertiary"
                            btnname="Sign In with Google"
                            mt="8"
                            boxShadow="0 0 0 1px #D6D6D6"
                            onClick={handleGoogleLogin}
                        />
                        <HStack mt="2" spacing="4">
                            <hr style={{ flex: 1, borderTop: '1px solid #D8C183' }} />
                            <Text color="brand.400">or</Text>
                            <hr style={{ flex: 1, borderTop: '1px solid #D8C183' }} />
                        </HStack>
                        <VStack mt="4" spacing="4">
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
                                    color="brand.1200"
                                    border="none"
                                    placeholder="***************"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </VStack>
                        </VStack>
                        <Box mt="4" color="brand.800">
                            <u>Forgot password?</u>
                        </Box>
                        <CustomButton
                            type="primary"
                            width="full"
                            height={['60px']}
                            fontWeight={600}
                            fontSize={20}
                            btnname="Login"
                            mt="4"
                            onClick={handleLogin}
                            isLoading={loading}
                        />
                        <Text mt="4" color="brand.800" textAlign="center">
                            <u>Don&apos;t have an account? </u>
                            <Link href='/signup' fontWeight={600} color="brand.900">
                                Sign up
                            </Link>
                        </Text>
                    </Box>
                  
                </Center>

               
                
            </VStack>

            <CustomFooter />
            
          
           
             </VStack>

    );
};

export default LoginPage;
