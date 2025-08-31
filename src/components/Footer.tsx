/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import * as React from "react"
import { useAppContext } from "../context/AppProvider"
import { Heading, HStack, Stack } from "@chakra-ui/react"

function Copyright(): React.JSX.Element {
    return (
        <Heading>
            {new Date().getFullYear()}
        </Heading>
    );
}

export default function AppFooter(): React.JSX.Element {

    const { isMobileViewport } = useAppContext()

    return (
        <Stack
            as="footer"
            maxWidth={1264}
            mr={'auto'} ml={'auto'}
            paddingX={isMobileViewport ? 5 : 4}
            paddingY={isMobileViewport ? 5 : 6}
            w={'100%'} direction={{ base: 'column', xl: 'row', md: 'row' }}
        >
            <HStack width={"100%"} justifyContent={'space-between'}>
                <Copyright />

            </HStack>

        </Stack>
    )
}
