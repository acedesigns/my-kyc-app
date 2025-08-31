/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import * as React from "react"
import { VStack, Button, ButtonGroup, Heading } from "@chakra-ui/react"


function App(): React.JSX.Element {

  return (
      <VStack
          maxWidth={1264}
          width="100%" mr={'auto'} ml={'auto'}
          direction={{ base: 'column', xl: 'row', md: 'row' }}
      >
          <Heading as={'h1'}> Welcome to Our App </Heading>

          <ButtonGroup colorPalette={"blue"}>
              <Button asChild>
                  <a href="/mobile">Mobile</a>
              </Button>

              <Button asChild>
                  <a href="/desktop">Web</a>
              </Button>
          </ButtonGroup>
    </VStack>
  )
}

export default App
