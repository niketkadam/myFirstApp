import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {
 datas: FirebaseListObservable<any>;
  constructor(private af:AngularFireDatabase) {

   }

   getData(){
       this.datas = this.af.list('/datas') as FirebaseListObservable<datas[]>;
       return this.datas;
   }

}
interface datas{
 $key?:string;
 title?:string;
 city:string;
 image:string;
 type?:string;
}
