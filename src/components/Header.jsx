import { HStack, Icon, Image, Spinner, Text } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import { useMemo, useState } from "react";
import OrangeButton from "./OrangeButton";
import NavItem from "../components/NavItem";
import { endSession, isAuthenticated } from "../functions/auth";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
    const [token, setToken] = useState([]);
    const location = useLocation();
    const { pathname } = location;
    useMemo(async () => {
        const token = await isAuthenticated();
        setToken(token);
        if(!token && pathname === '/output'){
            window.location.href = '/login';
        }
        if(token && pathname === '/login'){
            window.location.href = '/dashboard';
        }
        if(!token && pathname === '/profile'){
            window.location.href = '/login';
        }
        if(!token && pathname === '/history'){
            window.location.href = '/login';
        }
        if(!token && pathname === '/payment'){
            window.location.href = '/login';
        }
        if(token && pathname === '/signup'){
            window.location.href = '/dashboard';
        }
        if(token && pathname === '/'){
            window.location.href = '/dashboard';
        }
        if(!token && pathname === '/dashboard'){
            window.location.href = '/login';
        }
    }, []);

    const [navTranslation, setNavTranslation] = useState('translateX(-100%)');

    const toggleNav = () => {
        navTranslation === 'translateX(-100%)'
            ?
            setNavTranslation('translateX(0)')
            :
            setNavTranslation('translateX(-100%)')
    }

    const goToLogin = async () => {
        if (token)
            await endSession();
        else
            window.location.href = '/login';

    }

    return (
        <HStack
            width={'100%'}
            justifyContent={'space-between'}
            display={{ base: 'block', lg: 'flex' }}
        >
            <HStack
                width={'100%'}
                justifyContent={'space-between'}
            >
                <HStack spacing={4} alignItems={'center'}>
                    <Image
                        src={'/logo.png'}
                        alt={'Logo'}
                        width={'3rem'}
                        height={'3rem'}
                        cursor={'pointer'}
                        onClick={() => window.location.href = '/'}
                    />
                    <Text
                        fontSize={'xl'}
                        fontWeight={'bold'}
                        color={'brand.500'}
                        cursor={'pointer'}
                        onClick={() => window.location.href = '/'}
                    >
                        Sudha.app
                    </Text>
                </HStack>
                <Icon
                    display={{ lg: 'none' }}
                    as={HamburgerIcon}
                    width={'2rem'}
                    alt="Menu"
                    cursor={'pointer'}
                    onClick={toggleNav}
                />
            </HStack>
            <HStack
                spacing={10}
                alignItems={'center'}
                flexDir={{ base: 'column', lg: 'row' }}
                position={{ base: 'absolute', lg: 'initial' }}
                left={0}
                top={0}
                zIndex={20}
                padding={{ base: 14, lg: 0 }}
                background={'brand.300'}
                shadow={{ base: 'xl', lg: 'none' }}
                minHeight={{ base: '100vh', lg: 'fit-content' }}
                transform={{ base: navTranslation, lg: 'translateX(0)' }}
                transition={'transform 200ms linear'}
            >
                <NavItem route='/' linkName={'Home'} />
                {/* route can also be passed as prop to NavItem after uncommenting it in NavItem.jsx but NavItem has to be updated with React Router Link to function properly when making pages. */}
                {token && <NavItem route='/history' linkName={'History'} />}
                {token && <NavItem route='/template' linkName={'Template'} />}
                {!token ? <NavItem route='#features' linkName={'Features'} /> : <NavItem route='/profile' linkName={'Profile'} />}
                {!token && <NavItem route="#pricing" linkName={'Pricing'} /> }
                {!token && <NavItem route="/story" linkName={'Story'} />}
                <OrangeButton handleClick={goToLogin} btnName={token ? 'Log Out' : 'Log In'} />
            </HStack>
        </HStack>
    )
}

export default Header
