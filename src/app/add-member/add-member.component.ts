import { Component, OnInit } from '@angular/core';
import {ClubService } from '../club-service.service'
import {Member} from '../member';
import { Book } from '../book';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
  providers:[ClubService]
})
export class AddMemberComponent implements OnInit {

  constructor( private clubService: ClubService) { }

  ngOnInit() {
  }

  memberToDisplay: Member;
  addMember(name: string, description: string, image: string, phone:string, email:string){

  let newMember :Member = new Member(name, description, image,phone,email,[]);

  this.memberToDisplay = newMember;
};

addBook(title:string,author:string,image:string){
  let newBook : Book = new Book(title,author,image);
  this.memberToDisplay.booksRead.push(newBook);
}

submitMember(){
  this.clubService.addMember(this.memberToDisplay);
  //add memberToDisplay to firebase
}

}
