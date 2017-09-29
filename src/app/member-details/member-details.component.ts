import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Member} from '../member';
import {ClubService } from '../club-service.service'

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
  providers:[ClubService]

})
export class MemberDetailsComponent implements OnInit {
  selectedMember;
  selectedMemberKey;
  constructor(private route : ActivatedRoute, private clubService: ClubService) { }

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
      this.selectedMemberKey = urlParameters['key'];
      });

    this.selectedMember = this.clubService.getMemberByKey(this.selectedMemberKey);
  }

}
