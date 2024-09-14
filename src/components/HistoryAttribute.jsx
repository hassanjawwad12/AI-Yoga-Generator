import PropTypes from 'prop-types';
import { Text, VStack } from '@chakra-ui/react'

const HistoryAttribute = ({ label, value }) => {
    return (
        <VStack>
            <Text
                fontWeight={'700'}
                fontSize={{ base: 'normal', md: 'large' }}
                w={'100%'}
            >
                {label}&nbsp;
            </Text>
            <Text
                fontSize={'small'}
                fontWeight={400}
                w={'100%'}
            >
                {value}
            </Text>
        </VStack>
    )
}

HistoryAttribute.propTypes =
{
    label: PropTypes.string,
    value: PropTypes.string || PropTypes.number
}

export default HistoryAttribute
