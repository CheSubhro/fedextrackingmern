import dotenv from 'dotenv'
import { app } from './app.js'

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 3000 // Default to port 3000 if PORT environment variable is not set

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});






