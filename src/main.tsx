/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import "./App.css"
import App from "./App"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { DesktopPage, ErrorPage, MobilePage } from "./routes"
import Root, { loader as rootLoader } from "./navigation/root"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const appRoutes = createBrowserRouter ([
    {
        path: '/',
        loader: rootLoader,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <App /> },
                    { path: '/mobile', element: <MobilePage /> },
                    { path: '/desktop', element: <DesktopPage /> },
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider value={defaultSystem}>
            <RouterProvider router={appRoutes} />
        </ChakraProvider>
    </React.StrictMode>
)