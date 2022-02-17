import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  email!:string;
  password!:string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email != null && this.password != null) {
      this.authService.emailSignUp(
        this.email,
        this.password
      );
    }
  }

}
