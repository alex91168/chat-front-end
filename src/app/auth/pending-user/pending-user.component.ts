import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from '../../services/endpoints/endpoint.service';

@Component({
  selector: 'app-pending-user',
  imports: [],
  templateUrl: './pending-user.component.html',
  styleUrl: './pending-user.component.scss'
})
export class PendingUserComponent {
  constructor( private token: ActivatedRoute, private endpoint: EndpointService, private router: Router ){}
  tokenParam: string | null = '';
  test:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNzQzMTAyMDgxMDAyIiwidXNlcm5hbWUiOiJ0ZXN0ZTAyIiwic3RhdHVzIjoicGVuZGluZyIsImlhdCI6MTc0MzEwMjA4MSwiZXhwIjoxNzQzMTAyOTgxfQ.LrQVIl41RjWVnMa8_IGHD65UIe5TkfvUIHgzeGbATIM'
  ngOnInit(): void {
    this.endpoint.authenticator_validEmail().subscribe({
      error: (err) => {
        console.log(err)
        if (err.error.status === 403) { this.router.navigate(["/"])}
        if (err.error.statusCode === 401) { this.router.navigate(["/login"])}
      }
    })
    this.token.paramMap.subscribe(token => {
      const getToken = token.get('token') || '';
      this.tokenParam = getToken;
      if (getToken) {
        this.endpoint.valid_authenticator_user(this.tokenParam).subscribe({
          next: () => { this.router.navigate(["/"]) },
          error: (err) => { console.log(err) }
        })
      } 
    })
  }

  requestNewToken(): void{
    this.endpoint.request_new_email_token().subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err)
    })
  }

}
