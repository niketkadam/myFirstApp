import { Component, OnInit } from '@angular/core';
import {FirebaseService}from '../../services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
datas:any;
  constructor(private FirebaseService:FirebaseService) { }

  ngOnInit() {
    this.FirebaseService.getData().subscribe(datas=>{
      console.log(datas);
      this.datas=datas
    })
  }

}
