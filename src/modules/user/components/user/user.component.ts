import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../../../../interfaces';
import { ApiService } from 'src/modules/core/core.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserInterface;
  loading: boolean;
  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { 
                this.loading= false;
              }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.loading = true;
    this.apiService.fetchUserById(userId).subscribe((user: UserInterface) => {
      this.user = user;
      this.loading = false;
    });
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
