import { defineStore } from 'pinia';
import { userStorageService } from '@/services/userStorageService';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    initialize() {
      const localUser = userStorageService.getUserFromLocalStorage();
      
      if (localUser) {
        this.user = userStorageService.getUser(localUser.id);
        this.isLoggedIn = true;
      }
    },
    login(username, password){
      const user = { username, password };
      const foundUser = userStorageService.loginUser(user);
      if(foundUser){
        this.user = foundUser;
        this.isLoggedIn = true;
      }
      return foundUser ?? null;
    },
    signup(username, password) {
      const user = { username, password };
      this.user = userStorageService.createUser(user);
      this.isLoggedIn = true;
    },
    changeUserFunds(id, amount){
      const user = userStorageService.getUser(id);
      user.funds += amount;
      user.transactions.unshift(`$${amount} ${amount > 0? 'added to' : 'widthdrawed from'} your account`);
      this.user = userStorageService.editUserFunds(user);
    },
    sendMoneyBetweenUsers(senderId, recieverId, amount){
      if(senderId === recieverId){
        throw 'You can not send money to yourself'
      }
      const senderUser = userStorageService.getUser(senderId);
      const recieverUser = userStorageService.getUser(recieverId);
      
      if(!recieverUser){
        throw `No user with id number ${recieverId} was found`;
      } else {
        senderUser.funds -= amount;
        senderUser.transactions.unshift(`$${amount} sent to ${recieverId} from your account`);
        this.user = userStorageService.editUserFunds(senderUser);
        
        recieverUser.transactions.unshift(`$${amount} sent from ${senderId} to your account`);
        recieverUser.funds += amount;
        userStorageService.editUserFunds(recieverUser);
      }
    },
    logout() {
      this.user = null;
      this.isLoggedIn = false;
      userStorageService.clearUserFromLocalStorage();
    },
  },
});