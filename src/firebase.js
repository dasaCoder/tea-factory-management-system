import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDCgeaCEAvIAhzjKZ1QW9cb_fwDlorqBA8",
  authDomain: "dana-tea.firebaseapp.com",
  databaseURL: "https://dana-tea.firebaseio.com",
  projectId: "dana-tea",
  storageBucket: "dana-tea.appspot.com",
  messagingSenderId: "239188458232",
  appId: "1:239188458232:web:fdd202753b206b1ecb590d"

};

firebase.initializeApp(firebaseConfig);

export default firebase;