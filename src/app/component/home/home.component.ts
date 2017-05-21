import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private af: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
