import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Party } from 'src/app/models/Party';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.css']
})
export class PartyDetailsComponent implements OnInit {
@Input() party!:Party; 
@Output() onDeleteParty: EventEmitter<Party> = new EventEmitter()
@Output() onToggleZukunft: EventEmitter<Party> = new EventEmitter()

faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(party:Party){
    this.onToggleZukunft.emit(party);
  }

  deleteParty(party:Party){
    this.onDeleteParty.emit(party);
  }

}
