import HistoryAttribute from './HistoryAttribute'
import OrangeButton from './OrangeButton'
import PropTypes from 'prop-types';
import { HStack, Text, VStack } from '@chakra-ui/react'

const HistoryTile = ({/* history_id = '',*/ feelings = 'N/A', conditions = 'N/A', time = 'N/A', expertise = 'N/A', ...props }) => {
    return (
        <VStack
            background={'brand.700'}
            paddingX={{ base: 2.5, sm: 7, md: 9, lg: 16 }}
            paddingY={{ base: 3, sm: 5, md: 9, lg: 10 }}
            borderRadius={{ base: '2xl', lg: '3xl' }}
            spacing={0}
            marginTop={10}
            shadow={'md'}
        >
            {/* <Text
                w={'100%'}
                fontSize={'md'}
                fontWeight={'700'}
                color={'brand.secondary'}
            >
                23-08-23 | 18:45
            </Text> */}
            <HStack
                flexDir={{ base: 'column', md: 'row' }}
                spacing={{ lg: 20, xl: 32 }}
            >
                <HStack
                    spacing={{ base: 7, sm: 9, md: 16, lg: 16, xl: 24 }}
                >
                    <HistoryAttribute label={'Feeling'} value={feelings} />
                    <HistoryAttribute label={'Conditions'} value={conditions} />
                    <HistoryAttribute label={'Time'} value={time} />
                    <HistoryAttribute label={'Expertise'} value={expertise} />
                </HStack>
                <VStack
                    justifyContent={"flex-start"}
                    paddingLeft={{ base: 0, md: 20 }}
                    w={'100%'}
                >
                    <OrangeButton 
                    btnName={'View'} 
                    handleClick={() => props.onClick()}
                    />
                    <Text
                        display={{ base: 'none', md: 'block' }}
                    >
                        &nbsp;
                    </Text>
                </VStack>
            </HStack>
        </VStack>
    )
}

HistoryTile.propTypes =
{
    history_id: PropTypes.string,
    feelings: PropTypes.string,
    conditions: PropTypes.string,
    time: PropTypes.string || PropTypes.number,
    expertise: PropTypes.string
}

export default HistoryTile
