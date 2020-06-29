import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }


  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitLoginForm() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authentificationService.signInUser(email, password).then(
      (data) => {
        console.log(data);
        this.router.navigate(['/admin', 'dashboard'])
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
    console.log(this.loginForm.value);
  }


  // affiche le formulaire de connection 


  // function au click 

    //  création, appel le service en donnant les inputs à renseigner dans le service qui fera l'appel a la bdd
   
   
    //  modification, fait un get du bon user via l'id, get.setValue 

    // suppression vérif via id


}
