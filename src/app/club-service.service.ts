import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Book} from './book';
import {Member} from './member';

@Injectable()
export class ClubService {

  members : FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase)
  {
    this.members = database.list('members');
  }

  getMembers(){
    return this.members;
  }

  addMember(newMember :Member){
    this.members.push(newMember);
  }

  getMemberByKey(memberKey:string){
    return this.database.object('members/' + memberKey);
  }

  updateProject(){

  }

  deleteProject(){

  }


}
