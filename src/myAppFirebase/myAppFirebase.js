import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  storageBucket: "gs://stayfy-d4fc1.appspot.com",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default app;
export { storage };
