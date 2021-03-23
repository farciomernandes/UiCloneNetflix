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
    console.log(email, password);

    return await Firebase.auth().signInWithEmailAndPassword("boi@gmail.com", "macaco123").then(response => {
      return response.user
    }).catch(err => {
      throw new Error("Deu ruim ao autenticar!")
    })
  }

  static async logout (){
    Firebase.auth().signOut().catch(err => {
      throw new Error('Error in logout')
    })
  }
}

export default User;
