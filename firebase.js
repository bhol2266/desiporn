import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore'
import { getStorage, ref } from "firebase/storage";


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZqrYUARpJ0SSyvqV0eBGbx9I8fe_wBec",
    authDomain: "facebook-yt-clone-18af6.firebaseapp.com",
    projectId: "facebook-yt-clone-18af6",
    storageBucket: "facebook-yt-clone-18af6.appspot.com",
    messagingSenderId: "465952210360",
    appId: "1:465952210360:web:ef3d4ce83d6bf1f601a34d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }


