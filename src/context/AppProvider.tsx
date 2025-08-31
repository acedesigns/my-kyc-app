/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/


import * as React from "react"
import { useBreakpointValue } from "@chakra-ui/react"
import { ReactNode, createContext, useContext } from "react"

interface Props {
    children?: ReactNode
}


type AppProviderProps = {
    isMobileViewport: boolean
}


const AppContext =createContext<AppProviderProps>({
    isMobileViewport: true
})

export const useAppContext = (): AppProviderProps => useContext(AppContext)

export default function AppProvider ({children}: Props) {
    const breakpoint: string | undefined = useBreakpointValue({ base: 'mobile', sm: 'desktop' })
    const isMobileViewport = breakpoint === "mobile"

    React.useEffect(
        () => {},
        [])

    const context = React.useMemo(
        () => ({
            isMobileViewport,
        }),
        [isMobileViewport]
    )

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
