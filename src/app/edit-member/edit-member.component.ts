import { Component, OnInit, Input } from '@angular/core';
import {ClubService } from '../club-service.service'
import {Member} from '../member';


@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers:[ClubService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private clubService: ClubService) { }

  ngOnInit() {
  }

  beginUpdatingMember(selectedMember){
  this.clubService.updateMember(selectedMember);
}

beginDeletingMember(memberToDelete){
  if (confirm("REALLY?")){
    this.clubService.deleteMember(memberToDelete);
  }
}
  beginDeletingBook(member, bookToDelete){
    console.log('test');
    let key = null;
    for (let i = 0; i < member.booksRead.length; i++) {
        if (member.booksRead[i].title !=null && member.booksRead[i].title === bookToDelete.title)
        {
          key = i;
          this.clubService.deleteBook(member,key);

          console.log("DELETING" + i);
          break;
        }
    }
  }

}
