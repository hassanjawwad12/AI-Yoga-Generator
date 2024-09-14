import React from 'react'
import { Text, Stack, VStack } from "@chakra-ui/react"

export default function InputTile({ feeling, condition, time, expertise }) {
    return (
        <VStack w={'full'} paddingX={[3, 3, 6, 6]}>
            <Stack
                bg={'#F07B3F'}
                rounded={'xl'}
                px='6'
                py='4'
                color={'whiteAlpha.900'}
                direction={['column', 'column', 'row']}
                w={'full'}
                justify={"space-between"}
                spacing={4} align="center">
                <VStack align={['center', 'flex-start']}>
                    <Text fontSize="lg">Feeling</Text>
                    <Text fontSize="md" fontWeight={'bold'} letterSpacing={'wider'} textTransform={'uppercase'}>{feeling}</Text>
                </VStack>
                <VStack align={['center', 'flex-start']}>
                    <Text fontSize="lg">Condition</Text>
                    <Text fontSize="md" fontWeight={'bold'} letterSpacing={'wider'} textTransform={'uppercase'}>{condition}</Text>
                </VStack>
                <VStack align={['center', 'flex-start']}>
                    <Text fontSize="lg">Time</Text>
                    <Text fontSize="md" fontWeight={'bold'} letterSpacing={'wider'} textTransform={'uppercase'}>{time}</Text>
                </VStack>
                <VStack align={['center', 'flex-start']}>
                    <Text fontSize="lg">Expertise</Text>
                    <Text fontSize="md" fontWeight={'bold'} letterSpacing={'wider'} textTransform={'uppercase'}>{expertise}</Text>
                </VStack>
            </Stack>
        </VStack>
    )
}
