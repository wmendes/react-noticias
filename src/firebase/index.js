import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyAiNaQMNz07xD4o0A0M_E9e6Vcqs_gnrc8",
	authDomain: "react-noticias.firebaseapp.com",
	databaseURL: "https://react-noticias.firebaseio.com",
	projectId: "react-noticias",
	storageBucket: "",
	messagingSenderId: "577817536773",
	appId: "1:577817536773:web:d60ab0a552588bf9"
};

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	
	getCurrentUser() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

}

export default new Firebase()
