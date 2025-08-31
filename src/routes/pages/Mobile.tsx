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
import { useAppContext } from "../../context/AppProvider"
import { VStack, Heading, Box, HStack, Text, Stack } from "@chakra-ui/react"
import { collection, onSnapshot, DocumentData, QuerySnapshot } from "firebase/firestore"

function MobilePage() {
    const { isMobileViewport } = useAppContext()

    const [mobmessage, setMobMessages] = useState<Message[]>([]);

    useEffect(() => {
        const unsub = onSnapshot(
            collection(AppDatabase, "messages"),
            (snapshot: QuerySnapshot<DocumentData>) => {
                const msgs: Message[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Message[];
                setMobMessages(msgs.sort((a, b) => a.timestamp - b.timestamp));
            }
        );
        return () => unsub();
    }, [])

    return (
        <VStack
            maxWidth={1264}
            paddingY={isMobileViewport ? 5 : 6}
            paddingX={isMobileViewport ? 5 : 4}
            width="100%" mr={'auto'} ml={'auto'}
            direction={{ base: 'column', xl: 'row', md: 'row' }}
        >
            <Heading> Hi Mobile </Heading>

            <Stack w={'100%'}>
                <Box borderRadius={15} p={5} border={'1px solid #ccc'} style={{ minHeight: "100px", overflowY: "auto"}}>
                {mobmessage.length === 0 && (<Heading> No Messages yet </Heading>)}

                {mobmessage.map((msg) => (
                    <Text key={msg.id}>
                        <b>{msg.user}</b>: {msg.text}
                    </Text>
                ))}
            </Box>

                <Chat user={'mobile'} />
            </Stack>
        </VStack>
    )
}

export default MobilePage
