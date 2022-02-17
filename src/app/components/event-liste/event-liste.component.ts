import { Component, OnInit } from '@angular/core';
import { Nutzer } from 'src/app/models/Nutzer';
import { Party } from 'src/app/models/Party';
import { AuthService } from 'src/app/services/auth.service';
import { NutzerService } from 'src/app/services/nutzer.service';
import { PartyService } from 'src/app/services/party.service';

@Component({
  selector: 'app-event-liste',
  templateUrl: './event-liste.component.html',
  styleUrls: ['./event-liste.component.css']
})
export class EventListeComponent implements OnInit {

  parties:Party[] = [];
  nutzer:Nutzer[] = [];

  constructor(private partyService: PartyService ,private nutzerService: NutzerService ,private authService: AuthService) { }

  ngOnInit(): void {
   this.partyService.getAllParties().subscribe((parties) => this.parties = parties);
   this.nutzerService.getAllNutzer().subscribe((nutzer) => this.nutzer = nutzer);
  }

  AddParty(party:Party){
    this.partyService.addParty(party);
  }

  toggleZukunft(party:Party){
    party.zukunft = !party.zukunft
    this.partyService.updateParty(party);
  }

  deleteParty(party:Party){
   this.partyService.deleteParty(party);
  }

  signOut() {
    this.authService.logout();
  }

}
