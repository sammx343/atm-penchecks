const CURRENT_USER_KEY = 'atm_user';
const USER_LIST_KEY = 'atm_users';

export const userStorageService = {
  getUsers() {
    const users = localStorage.getItem(USER_LIST_KEY);
    return users ? JSON.parse(users) : [];
  },
  getUser(id){
    const users = this.getUsers();
    const foundUser = users.find( indexUser => id ===  indexUser.id);
    return foundUser;
  },
  editUserFunds(editedUser, transactionMessage){
    const users = this.getUsers();

    if(!users) return;

    const modifiedUsers = users.map( indexUser =>  {
      if(indexUser.id === editedUser.id){
        return editedUser;
      }
      return indexUser
    });
    
    localStorage.setItem(USER_LIST_KEY, JSON.stringify(modifiedUsers));
    return editedUser;
  },
  createUser(user) {
    user = {...user, id: Date.now(), transactions: [], funds: 0}

    const users = this.getUsers();
    if(users){
      users.push(user);
    }
    
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    localStorage.setItem(USER_LIST_KEY, JSON.stringify(users));
    console.log(user);
    return user;
  },
  loginUser(user){
    const users = this.getUsers();
    if(!users){
      return null;
    }

    const foundUser = users.find( indexUser => user.username ===  indexUser.username && user.password ===  indexUser.password);
    console.log(foundUser);
    
    return foundUser;
  },
  getUserFromLocalStorage() {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },
  clearUserFromLocalStorage() {
    localStorage.removeItem(CURRENT_USER_KEY);
  },
};