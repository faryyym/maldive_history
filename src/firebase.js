import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyABkCja5YpqRbedoTeDHl8_k2a6IMXtGwA',
  authDomain: 'mahalhistory.firebaseapp.com',
  databaseURL: 'https://mahalhistory-default-rtdb.firebaseio.com',
  projectId: 'mahalhistory',
  storageBucket: 'mahalhistory.appspot.com',
  messagingSenderId: '885655861322',
  appId: '1:885655861322:web:52e81a11275a245aaeceb3',
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db, ref, onValue }
