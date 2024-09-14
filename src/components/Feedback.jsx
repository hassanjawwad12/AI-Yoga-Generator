import { HStack, Icon, Text, VStack, useToast } from '@chakra-ui/react'
import React from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { addFeedback } from '../functions/auth'

export default function Feedback(props) {
    const toast = useToast()
    const [feedback, setFeedback] = React.useState(null)

    const onFeedbackUp = () => {
        toast({
            title: 'Thanks for your feedback!',
            description: 'We are glad that we could help you.',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        addFeedback(props.sequenceId, 'Very Good')
    }

    const onFeedbackDown = () => {
        toast({
            title: 'Thanks for your feedback!',
            description: 'We are sorry that we could not help you.',
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
        addFeedback(props.sequenceId, 'Not Good')
    }

    React.useEffect(() => {
        if (feedback === 'up') {
            onFeedbackUp()
        }
        if (feedback === 'down') {
            onFeedbackDown()
        }
    }, [feedback])

    return (
        <VStack w='full' paddingX={[3, 3, 6, 6]}>
            <HStack w="full" bg={'gray.100'} padding={'6'} rounded={'lg'} spacing="24px" align="center" justify="center" mt="24px">
                <Text>Was this helpful?</Text>
                <Icon
                    as={FaRegThumbsUp} w="24px" h="24px" color={feedback === 'up' ? 'brand.200' : 'black'} cursor="pointer" onClick={() => setFeedback('up')} />
                <Icon as={FaRegThumbsDown} w="24px" h="24px" color={feedback === 'down' ? 'red.500' : 'black'} cursor="pointer" onClick={() => setFeedback('down')} />

            </HStack>
        </VStack>
    )
}