import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Party } from 'src/app/models/Party';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.css']
})
export class AddPartyComponent implements OnInit {
  @Output() onAddParty: EventEmitter<Party> = new EventEmitter
  name: string = "";
  tag:string = "";
  zukunft:boolean = false;
  showAddParty: boolean | undefined;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddParty = value);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert("Bitte gib einen Namen ein");
      return;
    }

    const newParty:Party = {
      name: this.name,
      tag: this.tag,
      zukunft: this.zukunft,
      ort: '',
      beschreibung: '',
      teilnehmer: []
    }

    this.onAddParty.emit(newParty);

    this.name = "";
    this.tag = "";
    this.zukunft = false;
  }

}
