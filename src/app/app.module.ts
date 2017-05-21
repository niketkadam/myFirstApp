import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FirebaseService}from './services/firebase.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListingsComponent } from './component/listings/listings.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListingComponent } from './component/listing/listing.component';
import { AddlistingComponent } from './component/addlisting/addlisting.component';
import { EditlistingComponent } from './component/editlisting/editlisting.component';


export const environment = {
  production: false,
  firebase: {
     apiKey: "AIzaSyAbkmD6VH4P9Ii-f7GfyG64Zbn3l1f-eHo",
    authDomain: "myfirstapp-c9a38.firebaseapp.com",
    databaseURL: "https://myfirstapp-c9a38.firebaseio.com",
    projectId: "myfirstapp-c9a38",
    storageBucket: "myfirstapp-c9a38.appspot.com",
    messagingSenderId: "21200140156"
  }
};


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'listings',component:ListingsComponent},
  {path:'add-listing',component:AddlistingComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddlistingComponent,
    EditlistingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
