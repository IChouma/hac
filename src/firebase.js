import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,doc, setDoc,getDocs,collection ,addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcUVfm5Uj6zoGOCqQarOGUQZAQwacEfBI",
  authDomain: "hac-clinic.firebaseapp.com",
  databaseURL: "https://hac-clinic-default-rtdb.firebaseio.com",
  projectId: "hac-clinic",
  storageBucket: "hac-clinic.appspot.com",
  messagingSenderId: "475018409453",
  appId: "1:475018409453:web:cb880085196ff9acaf23e4",
  measurementId: "G-086J151Z5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export  const clientsRef = collection(db, 'clients');