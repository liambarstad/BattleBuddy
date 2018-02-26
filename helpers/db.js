/*import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBr7NR7oYQBC0KRAF6hvpP3vrNbBLkkqWc',
  authDomain: 'battlebuddy-f2a64.firebase.com',
  databaseURL: 'https://battlebuddy-f2a64.firebaseio.com/',
  storageBucket: 'gs://battlebuddy-f2a64.appspot.com',
}

const fb = firebase.initializeApp(config)*/

const SQLite = require('react-native-sqlite-storage')

const db = SQLite.openDatabase("BattleBuddy.db", "1.0", "Please Work", 200000)
