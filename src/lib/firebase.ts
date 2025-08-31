/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { initializeApp } from "firebase/app"
import { getFirestore, Firestore } from "firebase/firestore"

const firebaseConfig = {
    // apiKey: "your-api-key",
    // authDomain: "your-project-id.firebaseapp.com",
    // projectId: "your-project-id",
    // storageBucket: "your-project-id.appspot.com",
    // messagingSenderId: "123456789",
    // appId: "your-app-id",

    apiKey: "AIzaSyCNjy-oRsgxQG3aixyWIKjl56rofH0-V9k",
    authDomain: "kyc-web-app.firebaseapp.com",
    projectId: "kyc-web-app",
    storageBucket: "kyc-web-app.firebasestorage.app",
    messagingSenderId: "640125528807",
    appId: "1:640125528807:web:060bdac88cfd09d3ab5042",
    measurementId: "G-PS14FPPG1M"
}


const app = initializeApp(firebaseConfig)
export const AppDatabase: Firestore = getFirestore(app)
