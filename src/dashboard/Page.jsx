import React from 'react'
import SequenceInput from './SequenceInput'
import { VStack } from '@chakra-ui/react'
import CustomFooter from '../components/CustomFooter'

export default function SequenceWrapper() {
    return (
        <VStack
            w={'full'}
            minHeight={'100vh'}
            background={'brand.100'}
            paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, '2xl': 56 }}
            paddingY={10}
            color={'brand.body'}
        >
            <SequenceInput />
            <CustomFooter />

        </VStack>
    )
}
