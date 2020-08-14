import * as firebase from 'firebase/app'
import store from '@/store'

const firebaseConfig = {
  apiKey: 'AIzaSyDPQVce3W3U0dB4mTbxTxfdY4WB25C3mf0',
  authDomain: 'user-5a231.firebaseapp.com',
  databaseURL: 'https://user-5a231.firebaseio.com',
  projectId: 'user-5a231',
  storageBucket: 'user-5a231.appspot.com',
  messagingSenderId: '690171817864',
  appId: '1:690171817864:web:796c11c935eb40d090143d',
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.commit('auth/setUser', {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      photoSrc: user.photoURL,
    })
  } else {
    store.commit('auth/logout')
  }
})
