# Realtime Device Communication

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?logo=firebase)
![MaterialUI](https://img.shields.io/badge/Material--UI-5-blue?logo=mui)
![License](https://img.shields.io/badge/License-MIT-green)

A proof-of-concept application demonstrating **real-time communication** between a desktop and a mobile device.


---

## 📑 Table of Contents
- [🚀 Live Demo](#-live-demo)
- [🧰 Tech Stack](#-tech-stack)
- [📋 Prerequisites](#-prerequisites)
- [🛠️ Setup & Installation](#️-setup--installation)
- [🧭 Usage](#-usage)
- [🏗️ Architecture & Design Decisions](#️-architecture--design-decisions)
- [✅ Functionality & Requirements Met](#-functionality--requirements-met)
- [🔮 Potential Future Enhancements](#-potential-future-enhancements)
- [🔌 Download Moola Mate](#-download-moola-mate-ios)

---


### 🚀 Live Demo
(Coming Soon)


### 🧰 Tech Stack
- **Frontend Framework**: React 18 + Vite
- **Realtime Database**: Firebase Firestore
- **UI Library**: Material-UI (MUI)
- **Build Tool**: Vite
- **Package Manager**: yarn

### 📋 Prerequisites
Before running this application, ensure you have the following installed on your system:

- Node.js (v20 or higher)
- Yarn
- A Firebase project with Firestore enabled.

### 🛠️ Setup & Installation
Install Yarn
```bash
npm install -g yarn
```

Clone the repository

```bash
git clone git@github.com:acedesigns/my-kyc-app.git
cd my-kyc-app
```

#### Install dependencies

```bash
yarn install
```

#### Configure Firebase

- Go to the Firebase Console and create a new project.
- Enable Firestore Database. Start in "test mode" for simplicity during development.
- Register a new Web App in your project settings and obtain the configuration object.


Fill in your Firebase config :

```javascript
// src/lib/firebase.ts
import { initializeApp } from "firebase/app"
import { getFirestore, Firestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "app-id"
};

const app = initializeApp(firebaseConfig)
export const db: Firestore = getFirestore(app)
```

##### Run the development server

```bash
yarn run dev
```
