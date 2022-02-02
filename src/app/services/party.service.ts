import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Party } from '../models/Party';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class PartyService {

  private partyCollection!: AngularFirestoreCollection<Party>; 
  private partyDoc!: AngularFirestoreDocument<Party>;
  private party!: Observable<Party[]>;

  constructor(private readonly afs: AngularFirestore) { 
    this.partyCollection = afs.collection<Party>('party');
    this.party = this.partyCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Party;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  getAllParties(): Observable<Party[]>{
    return this.party;
  }

  getSingleParty(party:Party){
    this.partyDoc = this.afs.doc(`party/${party.id}`);
    this.partyDoc.get();
  }

  addParty(addParty:Party){
    this.partyCollection.add(addParty);
  }

  updateParty(updatedParty: Party){
    this.partyDoc = this.afs.doc(`party/${updatedParty.id}`);
    this.partyDoc.update(updatedParty);
  }

  deleteParty(deleteParty: Party){
    this.partyDoc = this.afs.doc(`party/${deleteParty.id}`);
    this.partyDoc.delete();
  }
}
