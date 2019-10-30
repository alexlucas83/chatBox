import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0ZltiuhczJEJU723dOpKhw_czT2UDkY8",
    authDomain: "chatbox-231c0.firebaseapp.com",
    databaseURL: "https://chatbox-231c0.firebaseio.com",
})


const base = Rebase.createClass(firebase.database())

export { firebaseApp}

export default base