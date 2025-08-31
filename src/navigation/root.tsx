/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import Stack from '@mui/material/Stack'
import { Outlet } from 'react-router-dom'

export async function loader() {
    return {}
}

export default function Root() {
    return(
        <Stack direction={'column'} height={'100vh'} width={'100%'}>
            <Outlet />
        </Stack>
    )
}
