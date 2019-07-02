import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from '../modules/core';
import { UsersListModule } from '../modules/users-list';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    UsersListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
