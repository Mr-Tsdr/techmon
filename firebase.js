import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCH8GaYcQJ8TL4eAEZOwidz3X9V0Lzk5Y4",
  authDomain: "fir-auth-848a6.firebaseapp.com",
  projectId: "fir-auth-848a6",
  storageBucket: "fir-auth-848a6.firebasestorage.app",
  messagingSenderId: "146903514805",
  appId: "1:146903514805:web:97a1e1b030ff35cda688fc",
  measurementId: "G-KD801L2T0G"
};

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);

  const addPost = async () => {
    const collectionRef = collection(db, "products");

    const productId = cookies().get("productId")?.value;
   const userRef = doc(db, "products", productId);


  const docRef =  await addDoc(collectionRef, {
      title: FormData.get("title"),
      description : FormData.get("description"),
      image : FormData.get("image"),
      product: userRef
    })
console.log(docRef)
}

  export { addPost };

