import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import {ClubService } from '../club-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ClubService]
})
export class HomeComponent implements OnInit {

  currentRoute: string = this.router.url;
  members: FirebaseListObservable<any[]>;
  constructor(private router : Router, private clubService: ClubService) { }


  ngOnInit() {
    this.members = this.clubService.getMembers()
  }

  showDetails(projectToShow){
  }

  onGoalChange(optionFromMenu){
  }

}
