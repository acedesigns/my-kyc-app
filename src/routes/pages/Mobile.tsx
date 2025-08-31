/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { VStack, Heading } from "@chakra-ui/react"

function MobilePage() {
    return (
        <VStack
            maxWidth={1264}
            width="100%" mr={'auto'} ml={'auto'}
            direction={{ base: 'column', xl: 'row', md: 'row' }}
        >
            <Heading> Hi Mobile </Heading>
        </VStack>
    )
}

export default MobilePage
