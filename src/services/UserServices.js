import Firebase from '../utils/initializeFirebase';
import 'firebase/auth';

class User{

  static async create(email, password){

    await Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      return response.user
    }).catch(err=>{
      throw new Error("Erro, tente novamente!", err);
    })
  }

  static async authentication(email, password){

 return await Firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      return response.user
    }).catch( err => {
      throw new AuthenticError('Error in authentication', err)
    })
  }

  static async logout (){
    Firebase.auth().signOut().catch(err => {
      throw new Error('Error in logout')
    })
  }
}

export default User;
