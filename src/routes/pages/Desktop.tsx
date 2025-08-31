/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { Chat } from "../../components/"
import { Message } from "../../interface"
import { useEffect, useState } from "react"
import { AppDatabase } from "../../lib/firebase"
import { VStack, Heading, Box, HStack, Text } from "@chakra-ui/react"
import { collection, onSnapshot, DocumentData, QuerySnapshot } from "firebase/firestore"

function DesktopPage() {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const unsub = onSnapshot(
            collection(AppDatabase, "messages"),
            (snapshot: QuerySnapshot<DocumentData>) => {
                const msgs: Message[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Message[];
                setMessages(msgs.sort((a, b) => a.timestamp - b.timestamp));
            }
        );
        return () => unsub();
    }, [])

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
