/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import * as React from "react"
import {Heading, HStack} from "@chakra-ui/react"

function Copyright() {
    return (
        <Heading>
            {new Date().getFullYear()}
        </Heading>
    );
}

export default function AppFooter() {
    return (
        <React.Fragment>
            <HStack
                as="footer"
                backgroundColor="primary.500"
                color="#E5EAEF"
                flex="none"
                minHeight="54px"
                paddingY={4}
                width="100%"
            >
                <Copyright />
            </HStack>
        </React.Fragment>
    )
}
