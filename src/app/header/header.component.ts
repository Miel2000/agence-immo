import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import * as  firebase  from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  title  = 'Fab Immo';
  isLoggedIn = false; 

 
  constructor(
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        if(userSession) {
          console.log('Connecté !!!!!!!!');
          this.isLoggedIn = true; 
        } else {
          this.isLoggedIn = false; 

        }
      }
    )
  }

  onSignOut() {
    this.authentificationService.signOutUser();
  }

}
