import { User } from 'firebase/auth';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export type formData = { email: string; password: string };

export type AppState = {
  user: User | null;
  crimes: QueryDocumentSnapshot<DocumentData>[];
  isLoadingCrime: boolean | undefined;
  isLoadingUser: boolean | undefined;
  fetchCrimes: () => void;
  loginAdmin: (formData: formData) => void;
};
