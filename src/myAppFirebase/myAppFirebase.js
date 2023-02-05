import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  storageBucket: "gs://stayfy-d4fc1.appspot.com",
  databaseURL:
    "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "stayfy-d4fc1",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);
const firestore = getFirestore(app);

export default app;
export { storage, database, firestore };
