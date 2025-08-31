/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import './App.css'
import App from './App'
import React from "react"
import { ErrorPage } from "./routes"
import ReactDOM from "react-dom/client"
import Root, { loader as rootLoader } from "./navigation/root"
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
                ]
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={appRoutes} />
    </React.StrictMode>
)