import {Injectable} from '@angular/core';
// // import {AngularFireDatabase} from "angularfire2/database";
// // import {FirebaseAuth} from 'angularfire2';
// import * as firebase from 'firebase';
// import {FirebaseAuth} from '@firebase/auth-types';
//
@Injectable()
export class AuthService {
//
//   authState: FirebaseAuth = null;
//
//   constructor(// private af: AngularFire,
//     public aFireAuth: AngularFireAuth,
//     // private db: AngularFireDatabase,
//     // private router:Router
//   ) {
//
//     // this.aFireAuth.auth.subscribe((auth) => {
//     //   this.authState = auth;
//     // });
//   }
//
//   // Returns true if user is logged in
//   get authenticated(): boolean {
//     return this.authState !== null;
//   }
//
// //   // Returns current user
// //   get currentUser(): any {
// //     return this.authenticated ? this.authState.auth : null;
// //   }
// //
// // // Returns current user UID
// //   get currentUserId(): string {
// //     return this.authenticated ? this.authState.uid : '';
// //   }
//
//   login() {
//     this.aFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
//       .then(function (result) {
//         // this.GoogleAccessToken = result.credential.accessToken;     // This gives you a Google Access Token. You can use it to access the Google API.
//         // this.GoogleUser = result.user;                          // The signed-in user info.
//         // this.LoggedIn = true;
//         alert('Logged In');
//       })
//       .catch(function (error) {
//         alert('Error Logging In: ' + error)
//         }
//       );
//   }
}
