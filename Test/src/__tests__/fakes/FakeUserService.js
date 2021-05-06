const users = [];
let logged = {};

class FakeUser{

  static totalUsers(){
    return users;
  }

  static create(email, password){
    const user = {
        email,
        password,
        createdAt: new Date(),
        id: (Math.random() * Math.pow(10, 8)),
    };

    const exist = users.find(check => check.email === user.email);
    
    if(exist){
      return null;
    }

    users.push(user);
    
    logged = user;

    return user;
  }

  static authenticate(email, password){

    const checkemail = users.find(user => user.email === email);

    const checkpassword = users.find(user => user.password === password);

    if(checkemail && checkpassword){
        logged = checkemail;

        return checkemail;
    }

    return null;
  }

  static logout (user){

    if(!user.email){
      return null
    }

    logged = {};

    return true;
  }
}

export default FakeUser;