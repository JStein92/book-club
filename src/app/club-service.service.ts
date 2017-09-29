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

  updateMember(memberToUpdate){
    let memberEntryInFirebase = this.getMemberByKey(memberToUpdate.$key);
    memberEntryInFirebase.update({name: memberToUpdate.name,
                                   description: memberToUpdate.description,
                                   image: memberToUpdate.image,
                                   phone: memberToUpdate.phone,
                                   email: memberToUpdate.email,
                                   booksRead: memberToUpdate.booksRead})
  }

  deleteMember(memberToDelete){
    var memberEntryInFirebase = this.getMemberByKey(memberToDelete.$key);
    memberEntryInFirebase.remove();
  }

  deleteBook(member,bookToDeleteKey){
    console.log(member.$key + '/booksRead/' + bookToDeleteKey);
    let bookEntryInFirebase = this.database.object('members/' + member.$key + '/booksRead/' + bookToDeleteKey);
    bookEntryInFirebase.remove();
  }


}
