import create from 'zustand';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { query, collection, getDocs } from 'firebase/firestore';

import { firestoreDb } from 'src/libs';
import { history } from 'src/main';
import { AppState, formData } from 'src/types';

export const useStore = create<AppState>((set) => ({
  crimes: [],
  isLoadingCrime: false,
  isLoadingUser: false,
  user: null,

  // methods
  loginAdmin: ({ email, password }: formData) => {
    const auth = getAuth();
    set((state) => ({ isLoadingUser: (state.isLoadingUser = true) }));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        set((state) => ({ user: (state.user = user) }));
        set((state) => ({ isLoadingUser: (state.isLoadingUser = false) }));
        console.log(userCredential);
        history.push('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        set((state) => ({ isLoadingUser: (state.isLoadingUser = false) }));
      });
  },
  fetchCrimes: async () => {
    set((state) => ({ isLoadingCrime: (state.isLoadingCrime = true) }));
    const crimeQuery = query(collection(firestoreDb, 'crimes'));
    await getDocs(crimeQuery)
      .then((snapshot) => {
        set((state) => ({ crimes: (state.crimes = snapshot.docs) }));
        set((state) => ({ isLoadingCrime: (state.isLoadingCrime = false) }));
      })
      .catch((err) => {
        set((state) => ({ isLoadingCrime: (state.isLoadingCrime = false) }));
        console.log(err);
      });
  },
}));
