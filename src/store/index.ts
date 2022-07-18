import create from 'zustand';

import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';

import {
  QueryDocumentSnapshot,
  DocumentData,
  query,
  collection,
  getDocs,
} from 'firebase/firestore';

import { firestoreDb } from 'src/libs';
import { history } from 'src/main';
import { formData } from 'src/types';

export interface AppState {
  user: User | null;
  crimes: QueryDocumentSnapshot<DocumentData>[];
  isLoadingCrime: boolean | undefined;
  isLoadingUser: boolean | undefined;
  fetchCrimes: () => void;
  loginAdmin: (formData: formData) => void;
}

export const useStore = create<AppState>((set) => ({
  crimes: [],
  isLoadingCrime: false,
  isLoadingUser: false,
  user: null,

  // methods
  loginAdmin: ({ email, password }: formData) => {
    const auth = getAuth();
    set((state) => ({ isLoadingUser: true }));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        set((state) => ({ user: (state.user = user) }));
        set((state) => ({ isLoadingUser: false }));
        console.log(userCredential);
        history.push('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        set((state) => ({ isLoadingUser: false }));
      });
  },
  fetchCrimes: async () => {
    set((state) => ({ isLoadingCrime: true }));
    const crimeQuery = query(collection(firestoreDb, 'crimes'));
    await getDocs(crimeQuery)
      .then((snapshot) => {
        set((state) => ({ crimes: (state.crimes = snapshot.docs) }));
        set((state) => ({ isLoadingCrime: false }));
      })
      .catch((err) => {
        set((state) => ({ ...state, isLoading: false }));
        console.log(err);
      });
  },
}));
