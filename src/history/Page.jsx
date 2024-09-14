import { useState } from "react"
import { Spinner, Text, VStack } from "@chakra-ui/react"
import HistoryTile from "../components/HistoryTile"
import Header from "../components/Header"
import { useEffect } from "react"
import { getHistory } from "../functions/auth"
//import Footer from "../components/Footer"
import CustomFooter from "../components/CustomFooter"

const History = () => {
    const [loading, setLoading] = useState(false)
    const [history, setHistory] = useState([])
    useEffect(() => {
        setLoading(true);
        getHistory()
            .then((data) => {
                if (data) {
                    setHistory(Array.isArray(data) ? data : [])
                }
            })
            .catch((error) => {
                console.error('Error fetching history:', error);
                // Handle error, perhaps set an error state
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const saveHistoryToLocalStorage = (id) => {
        // get history from array based on id
        const history_ = history.find((history) => history.id === id)
        // save history to localstorage
        const content = JSON.parse(history_.output)?.content
        localStorage.setItem('sequence', content)
        const data = {
            id: history_.id,
            feeling: history_.feeling,
            condition: history_.condition,
            time: history_.time,
            expertise: history_.expertise,
        }
        localStorage.setItem('input', JSON.stringify(data))
        // redirect to dashboard
        window.location.href = '/output'
    }

    return (

        <VStack
        minHeight={'100vh'}  
        position={'relative'}
            
        >
        <VStack
            w={'full'}
            //height={'50%'}
            background={'brand.100'}
            paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, '2xl': 56 }}
            paddingY={10}
            color={'brand.500'}
            overflowY={'scroll'}
            height={'86vh'}
            
        >
            <Header />
            <Text
                mt={'12'}
                fontWeight={'bold'}
                fontSize={'lg'}
                letterSpacing={2}
               // color={'blue.400'}
            >
                HISTORY
            </Text>
            {loading ? (
                <Spinner />
            ) : history.length === 0 ? (
                <Text>No history yet</Text>
            ) : (
                
                history?.map(({ id, feeling, condition, time, expertise }) => (
                    <HistoryTile
                        key={id}
                        feelings={feeling}
                        conditions={condition}
                        time={time}
                        expertise={expertise}
                        onClick={() => saveHistoryToLocalStorage(id)}
                    />
                ))

            
            )}
              
        </VStack >
        <CustomFooter />
            
        </VStack>
    )
}

export default History
