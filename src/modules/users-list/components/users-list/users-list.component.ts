import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface, FetchUserResponse } from '../../../../interfaces';
import { ApiService } from 'src/modules/core/core.module'; 

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: UserInterface[] = [];
  pagesCount: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      map(data => data.users)
    )
      .subscribe((response: FetchUserResponse[]) => {
        this.mapResponse(response);
      });

      this.activatedRoute.queryParams.subscribe((params) => {
        const pageId = params['page'];
        this.apiService.fetchUsers(pageId).subscribe((response) => {
          this.mapResponse(response);
        });
      });
    }
  
    mapResponse(response: FetchUserResponse) {
      this.userList = response.data;
      this.pagesCount =  response.total;
    }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
