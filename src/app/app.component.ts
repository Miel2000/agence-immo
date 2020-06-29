import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyB2jS-ezm_cJnsvUUn013O5hirghEdn0iE",
      authDomain: "angularimmofab.firebaseapp.com",
      databaseURL: "https://angularimmofab.firebaseio.com",
      projectId: "angularimmofab",
      storageBucket: "angularimmofab.appspot.com",
      messagingSenderId: "511054329488",
      appId: "1:511054329488:web:8acba8893ca430afb30a15"
    };

    firebase.initializeApp(firebaseConfig);
  }
  title = 'udemyangular9';

}
