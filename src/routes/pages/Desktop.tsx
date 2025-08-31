/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { VStack, Heading } from "@chakra-ui/react"

function DesktopPage() {
    return (
        <VStack
            maxWidth={1264}
            width="100%" mr={'auto'} ml={'auto'}
            direction={{ base: 'column', xl: 'row', md: 'row' }}
        >
           <Heading> Hi Desktop </Heading>

        </VStack>
    )
}

export default DesktopPage
