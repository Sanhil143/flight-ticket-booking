import l from '../../common/logger';


class AuthService{
  userSignup(data){   
    l.info(`${this.constructor.name}.userSignup()`);
    return db.userSignup(data);
  }
}

export default new AuthService();