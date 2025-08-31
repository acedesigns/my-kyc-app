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

### 🧭 Usage

- Open the application in your browser. You will be presented with a home screen.
- Click "View Desktop Client" to simulate the desktop experience.
- Open a new browser tab to the same URL (http://localhost:9000).

In the new tab, click "View Mobile Client" to simulate the mobile experience.

You can now send messages between the two tabs. Messages sent from one "device" will appear on the other in real-time.

### 🏗️ Architecture & Design Decisions
#### Why React + Firebase?
The choice of tech stack was driven by the need for rapid development, real-time capabilities, and simplicity

- **Single Codebase for Both Clients**
    - Instead of building two separate apps, we use **React routes** (`/desktop` and `/mobile`).
    - This reduces development effort and makes testing & deployment simpler.

- **React**: Chosen for its component-based architecture, which simplifies managing dynamic UI states. When a new message is received from Firestore, React efficiently re-renders only the necessary components, providing a smooth user experience.

- **Firebase Firestore**: Building a real-time backend with WebSockets from scratch is time-consuming. Firebase Firestore provides a production-ready, scalable, and incredibly simple-to-use real-time database. It handles everything, allowing time to focus on the front-end.

- **Material-UI (MUI)**: Used to accelerate UI development. Instead of writing custom CSS for hours.

- **Responsive Web App (vs. React Native, Flutter)**: A responsive web app is the fastest way to simulate a mobile device.

### Data Flow & Design
The application follows a simple, unidirectional data flow:

- **User Action**: A user types a message and hits "Send" on either the Desktop or Mobile client.

- **Write to DB**: The client uses the Firebase SDK to add a new document to the `messages` collection in Firestore.

- **Realtime Update**: Firebase automatically pushes this change to all other clients that are actively listening (or "subscribed") to the `messages` collection.

- **UI Update**: The `onSnapshot` listener in each client's useMessages hook is triggered by the update. The hook updates the local React state with the new array of messages.

- **Re-render**: React re-renders the respective `Client` component, and the new message appears on the screen instantly.

This architecture is highly scalable and decouples the clients from each other—they only communicate via the central Firebase database, which acts as a single source of truth.


### ✅ Functionality & Requirements
Desktop Client: Allows users to send and receive messages in real-time.

- **Mobile Client**: Allows users to send and receive messages in real-time (simulated via a responsive web UI).

- **Realtime Database**: Firebase Firestore stores and syncs messages between all clients instantly.

- **User-Friendly Interface**: A clean, intuitive UI was built using Material-UI.

- **Supporting Documentation**: This README explains the design, functionality, and requirements.

### 🔮 Potential Future Enhancements
- **Authentication**: Integrate Firebase Auth to scope messages to specific user sessions, making it a multi-tenant application.

- **Security Rules**: Implement robust Firestore Security Rules to prevent unauthorized reads/writes.

---


### Download Moola Mate (IOS)

🔌 Shameless plug 🔌

Add expenses in seconds and see exactly where your money goes.

[Moola Mate - IOS ](https://bit.ly/4lLE48A)

##### 🔌 Shameless plug 🔌
---