import {action, observable} from 'mobx';
import {AsyncStorage} from 'react-native';
import {createContext, useContext} from 'react';

export interface User {
  name: string;
  email: string;
}

export interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserData {
  name: string;
  password: string;
}

class UserStore {
  @observable user!: User;

  signUp = async (credentials: SignUpCredentials): Promise<void> => {
    return AsyncStorage.setItem(
      credentials.email,
      JSON.stringify({name: credentials.name, password: credentials.password}),
    );
  };

  @action signIn = async (credentials: SignInCredentials): Promise<void> => {
    const data = await AsyncStorage.getItem(credentials.email);
    if (!data) {
      throw new Error('No user data found');
    }

    const userData = JSON.parse(data) as UserData;
    if (credentials.password !== userData.password) {
      throw new Error('Email or password incorrect');
    }
    this.user = {name: userData.name, email: credentials.email};
  };
}

export const userStore = new UserStore();
export const userContext = createContext<UserStore>(userStore);
export const useUserStore = () => useContext<UserStore>(userContext);
export default UserStore;
