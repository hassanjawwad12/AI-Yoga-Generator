'use client'
import { Text, VStack } from "@chakra-ui/react"
import history from '../../data/history.json'
import HistoryTile from "../../components/HistoryTile"
import Header from "./Header"

const History = () => {
    return (
        <VStack
            w={'full'}
            h={'full'}
            background={'brand.100'}
            paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, '2xl': 56 }}
            paddingY={10}
            color={'brand.500'}>
            <Text
                paddingTop={10}
                fontWeight={'bold'}
                fontSize={'lg'}
                letterSpacing={2}
            >
                HISTORY
            </Text>
            {
                history?.map(
                    ({ history_id, feelings, conditions, time, expertise }) =>
                        <HistoryTile
                            key={history_id}
                            feelings={feelings}
                            conditions={conditions}
                            time={time}
                            expertise={expertise}
                        />
                )
            }
        </VStack>
    )
}

export default History
