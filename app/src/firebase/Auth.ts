import { User, Auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export type AuthStateListener = (user: User | null) => void;

export interface IAuthProvider {
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  onAuthStateChanged(listener: (user: User | null) => void): () => void;
}

export class FirebaseAuthProvider implements IAuthProvider {
  private auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
  }

  async signIn(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async signOut(): Promise<void> {
    await signOut(this.auth);
  }

  onAuthStateChanged(listener: (user: User | null) => void): () => void {
    return onAuthStateChanged(this.auth, listener);
  }
}

export class FirebaseAuthHandler {
  private authProvider: IAuthProvider;
  private listeners: AuthStateListener[] = [];

  constructor(authProvider: IAuthProvider) {
    this.authProvider = authProvider;
  }

  async signIn(email: string, password: string): Promise<void> {
    await this.authProvider.signIn(email, password);
  }

  async signOut(): Promise<void> {
    await this.authProvider.signOut();
  }

  addAuthStateListener(listener: AuthStateListener): () => void {
    this.listeners.push(listener);
    const unsubscribe = this.authProvider.onAuthStateChanged((user) => {
      this.listeners.forEach((l) => l(user));
    });
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
      if (this.listeners.length === 0) {
        unsubscribe();
      }
    };
  }

  dispose(): void {
    this.listeners = [];
  }
}
