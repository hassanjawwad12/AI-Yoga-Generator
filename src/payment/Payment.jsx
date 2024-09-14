import Header from '../components/Header'
import Pricing from '../components/Pricing'
import { VStack } from '@chakra-ui/react'
import React from 'react'

export default function Payment() {
    return (
        <>
            <VStack p={[4,4,16,16]} spacing={0} h='full'>
                <Header />
                <Pricing />
            </VStack>
        </>
    )
}
