import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersResolver } from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      users: UsersResolver,
    },
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    UsersResolver
  ]
})
export class UsersListRoutingModule { }
export { UsersResolver} from './resolvers/users.resolver';