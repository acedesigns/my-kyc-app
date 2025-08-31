/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { Link } from 'react-router-dom'
import { Box, Button, Typography, Container } from '@mui/material'

function ErrorPage() {
    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
            <Box sx={{ p: 4, border: '1px solid #ccc', borderRadius: '8px' }}>
                <Typography variant="h1" component="h1" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Page Not Found
                </Typography>
                <Typography variant="body1" paragraph>
                    The page you are looking for does not exist or has been moved.
                </Typography>
                <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
                    Go to Home
                </Button>
            </Box>
        </Container>
    )
}

export default ErrorPage