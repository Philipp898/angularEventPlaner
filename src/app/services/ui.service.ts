import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddParty:boolean = false;
private subject = new Subject<any>();

  constructor() { }

  toggleAddParty():void{
    this.showAddParty = !this.showAddParty;
    this.subject.next(this.showAddParty)
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
