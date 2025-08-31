/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { Chat } from "../../components/"
import { useMessages } from "../../hooks/useMessages"
import { VStack, Heading, Box, HStack, Text } from "@chakra-ui/react"

function DesktopPage() {

    const { messages } = useMessages();

    return (
        <VStack
            maxWidth={1264}
            width="100%" mr={'auto'} ml={'auto'}
            direction={{ base: 'column', xl: 'row', md: 'row' }}
        >

           <Heading> Desktop </Heading>

            <HStack w={'100%'} justifyContent={'space-between'} gap={6}>

                <Box borderRadius={15} p={5} w={'50%'} border={'1px solid #ccc'} style={{ minHeight: "300px", overflowY: "auto"}}>
                    {messages.length === 0 && (<Heading> No Messages yet </Heading>)}

                    {messages.map((msg) => (
                        <Text key={msg.id}>
                            <b>{msg.user}</b>: {msg.text}
                        </Text>
                    ))}
                </Box>


                <Box w={'50%'} minHeight={'300px'}>
                    <Chat user="desktop" />
                </Box>
            </HStack>



        </VStack>
    )
}

export default DesktopPage
