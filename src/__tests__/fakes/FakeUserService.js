const users = [];
let logged = {};

class FakeUser{

  static create(email, password){
    const user = {
        email,
        password,
        createdAt: new Date(),
        id: (Math.random() * Math.pow(10, 8)),
    };

    users.push(user);
    
    logged = user;

    return user;
  }

  static authentication(email, password){

    const check = users.find(user => user.email === email);

    if(check)
        return check;

    return null;
  }

  static async logout (){

    logged = {};
  }
}

export default FakeUser;