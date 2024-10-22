export interface User {
  userName: string;
  username: string; // todo
  knownAs: string;
  gender: string;
  token: string;
  photoUrl?: string;
  roles: string[];
}
