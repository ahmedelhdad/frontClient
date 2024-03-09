import { initializeApp ,getApp,getApps } from "firebase/app";
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyBchdSeW_o6ySs75j6TYi6O24-oXWc0ceI",
  authDomain: "uploadiamgeapp-61d7f.firebaseapp.com",
  databaseURL: "https://uploadiamgeapp-61d7f-default-rtdb.firebaseio.com",
  projectId: "uploadiamgeapp-61d7f",
  storageBucket: "uploadiamgeapp-61d7f.appspot.com",
  messagingSenderId: "472155529616",
  appId: "1:472155529616:web:55d307421e1a24a02c5315"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig); 


const storage = getStorage(app)

export {storage,app}
