import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { UsersListRoutingModule, UsersResolver } from './users-list-routing.module';
import { CoreModule } from '../core/core.module';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    UsersResolver,
  ],
  exports:[
    UsersListRoutingModule
  ]
})
export class UsersListModule { }
export { UsersListComponent } from './components/users-list/users-list.component'; 