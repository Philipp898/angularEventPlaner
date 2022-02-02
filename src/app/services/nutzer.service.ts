import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nutzer } from '../models/Nutzer';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NutzerService {

  private nutzerCollection!: AngularFirestoreCollection<Nutzer>; 
  private nutzerDoc!: AngularFirestoreDocument<Nutzer>;
  private nutzer!: Observable<Nutzer[]>;

  constructor(private readonly afs: AngularFirestore) { 
    this.nutzerCollection = afs.collection<Nutzer>('nutzer');
    this.nutzer = this.nutzerCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Nutzer;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  getAllNutzer(): Observable<Nutzer[]>{
    return this.nutzer;
  }

  getSingleNutzer(nutzer:Nutzer){
    this.nutzerDoc = this.afs.doc(`nutzer/${nutzer.id}`);
    this.nutzerDoc.get();
  }

  addNutzer(addNutzer:Nutzer){
    this.nutzerCollection.add(addNutzer);
  }

  updateNutzer(updatedNutzer: Nutzer){
    this.nutzerDoc = this.afs.doc(`nutzer/${updatedNutzer.id}`);
    this.nutzerDoc.update(updatedNutzer);
  }

  deleteNutzer(deleteNutzer: Nutzer){
    this.nutzerDoc = this.afs.doc(`nutzer/${deleteNutzer.id}`);
    this.nutzerDoc.delete();
  }
}
