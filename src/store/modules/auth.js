import * as firebase from 'firebase/app'
import '@firebase/auth'
import '@firebase/storage'

export default {
  namespaced: true,

  state: {
    user: null,
  },

  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => !!state.user || !!window.localStorage.getItem('uid'),
  },

  mutations: {
    setUser(state, user) {
      state.user = user
      window.localStorage.setItem('uid', user.id)
    },

    logout(state) {
      state.user = null
      window.localStorage.removeItem('uid')
    },
  },

  actions: {
    async register({ commit }, user) {
      try {
        // add user in auth
        await firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)

        // add file in storage
        const { uid } = await firebase.auth().currentUser

        const imageExt = user.photo.name.slice(
          user.photo.name.lastIndexOf('.') + 1
        )
        const fileData = await firebase
          .storage()
          .ref(`avatars/${uid}.${imageExt}`)
          .put(user.photo)

        // update user profile in auth
        const imageSrc = await firebase
          .storage()
          .ref()
          .child(fileData.ref.fullPath)
          .getDownloadURL()

        await firebase.auth().currentUser.updateProfile({
          displayName: user.name,
          photoURL: imageSrc,
        })

        // update user in local state
        const currentUser = await firebase.auth().currentUser
        commit('setUser', {
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photoSrc: currentUser.photoURL,
        })
      } catch (e) {
        throw e
      }
    },

    async login(context, user) {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(user.email, user.password)
      } catch (e) {
        throw e
      }
    },

    async logout() {
      await firebase.auth().signOut()
    },
  },
}
