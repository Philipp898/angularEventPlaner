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
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/compat/firestore';
import { AddPartyComponent } from './components/add-party/add-party.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';

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
  providers: [
    { provide: USE_AUTH_EMULATOR, useValue: environment.useEmulators ? ['http://localhost:9099'] : undefined },
    { provide: USE_FIRESTORE_EMULATOR, useValue: environment.useEmulators ? ['http://localhost:8080'] : undefined },
    {
      provide: SETTINGS,
      useValue: environment.useEmulators ?  {
        host: 'localhost:8080',
        ssl: false
      }: undefined 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
