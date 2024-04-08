# vue2_firebase_auth
## App name: LookLoom

LookLoom is a full-stack web application built with Vue.js and Firebase. It provides user authentication through Google Authentication and enables storage of user data in Firebase's cloud storage. This project serves as a template to kickstart new web applications with similar functionalities.

## Features

- **Google Authentication**: Users can sign in to LookLoom using their Google accounts, providing a seamless and familiar authentication experience.
  
- **Data Storage**: LookLoom utilizes Firebase's cloud storage to securely store user data, such as profiles, preferences, and other application-specific information.

## Getting Started

To get started with LookLoom, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/FranciszekCieslik/vue2_firebase_auth.git
```
2. Create client/src/firebaseConfig.js
```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "your_apiKey",
  authDomain: "your_authDomain",
  projectId: "your_projectId",
  storageBucket: "your_storageBucket",
  messagingSenderId: "your_messagingSenderId",
  appId: "your_ appId",
  measurementId: "your_measurementId"
};

const app = initializeApp(firebaseConfig);

export default app;
```
3. Install dependencies using npm or yarn:
```bash
npm install
# or
yarn install
```


## Set up Firebase project and configuration:

* Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
* Enable Google Authentication in the Firebase Authentication section.
* Create Cloud Firestore:
```javascript
//Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Make sure the uid of the requesting user matches name of the user
    // document. The wildcard expression {userId} makes the userId variable
    // available in rules.
    match /users/{userId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
    }
  }
}
```
## Run the application:
```bash
cd client
```
```bash
npm run serve
# or
yarn serve
```
