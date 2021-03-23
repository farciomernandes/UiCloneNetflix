import firebase from 'firebase';

import ConfigFirebaseDevlopment from '../config/firebaseDevelopment.json';
let config = {};

if(process.env.NODE_ENV === "development"){
  config = ConfigFirebaseDevlopment
}else {
  config = ConfigFirebaseDevlopment
}

export default firebase.initializeApp(config)
