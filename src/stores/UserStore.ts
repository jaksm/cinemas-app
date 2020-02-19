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
  @observable user: User | null = null;

  checkAuth = async (): Promise<boolean> => {
    const data = await AsyncStorage.getItem('currentUser');
    if (!data) {
      return false;
    }

    this.user = JSON.parse(data);
    return true;
  };

  signUp = async (credentials: SignUpCredentials): Promise<void> => {
    const userData: UserData = {
      name: credentials.name,
      password: credentials.password,
    };
    await AsyncStorage.setItem(credentials.email, JSON.stringify(userData));

    this.user = {name: userData.name, email: credentials.email};
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

    await AsyncStorage.setItem(
      'currentUser',
      JSON.stringify({...userData, email: credentials.email}),
    );

    this.user = {name: userData.name, email: credentials.email};
  };

  @action signOut = async () => {
    this.user = null;
    await AsyncStorage.removeItem('currentUser');
  };
}

export const userStore = new UserStore();
export const userContext = createContext<UserStore>(userStore);
export const useUserStore = () => useContext<UserStore>(userContext);
export default UserStore;
