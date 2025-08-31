/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { Link } from "react-router-dom"
import { VStack, Button, ButtonGroup } from "@chakra-ui/react";

function App() {

  return (
      <VStack
          maxWidth={1264}
          width="100%" mr={'auto'} ml={'auto'}
          direction={{ base: 'column', xl: 'row', md: 'row' }}
      >
          <h1> Welcome to Our App </h1>
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
