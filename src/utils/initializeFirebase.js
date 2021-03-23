import firebase from 'firebase';

import ConfigFirebaseDevlopment from '../config/firebaseDevelopment.json';
let config = {};

config = ConfigFirebaseDevlopment;

export default firebase.initializeApp(config);
