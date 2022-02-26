import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = "Halleneventplaner"
  showAddParty:boolean | undefined;
  isLoggedIn:boolean | undefined;
  subscription:Subscription | undefined;

  constructor(private uiService: UiService, private router: Router,private authService: AuthService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddParty = value);
   }

  ngOnInit(): void {
  }

  AddEvent(){
    this.uiService.toggleAddParty();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

  userLoggedIn():boolean{
   return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.logout();
  }

}
