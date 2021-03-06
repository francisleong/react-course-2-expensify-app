import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const createAccount = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };
};

export const logIntoExistingAccount = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      alert(error);
    });
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};