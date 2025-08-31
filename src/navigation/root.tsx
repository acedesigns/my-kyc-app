/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/


import { Outlet } from 'react-router-dom'
import { Flex, HStack, VStack } from "@chakra-ui/react"
import { AppBarHeader, AppFooter } from "../components/"

export async function loader() {
    return {}
}

export default function Root() {
    return(
        <HStack height="var(--doc-height)" width="100vw" gap={0} overflow="hidden">
            <VStack height="100vh" overflowX={"hidden"} overflowY={"auto"} width={"100%"}>
                <AppBarHeader />

                <Flex flexDirection={"column"} as="main" flex={"5"} flexGrow={1} width={"100%"}>
                    <Outlet />
                </Flex>

                <AppFooter />
            </VStack>
        </HStack>
    )
}
