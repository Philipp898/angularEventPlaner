import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/shared/header/header.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EventListeComponent } from './components/event-liste/event-liste.component';
import { PartyDetailsComponent } from './components/party-details/party-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddPartyComponent } from './components/add-party/add-party.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const appRoutes:Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'about',component:AboutComponent, canActivate:[AngularFireAuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SigninComponent},
  {path:'event-liste',component:EventListeComponent, canActivate:[AngularFireAuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    EventListeComponent,
    PartyDetailsComponent,
    AddPartyComponent,
    AboutComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
