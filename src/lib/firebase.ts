/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"


const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id",
}


const app = initializeApp(firebaseConfig)
export const AppDatabase = getDatabase(app)
