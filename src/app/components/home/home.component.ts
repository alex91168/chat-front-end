import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EndpointService } from '../../services/endpoints/endpoint.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor ( private route: Router, private endpoint: EndpointService ){}
  isUserAuth: boolean = false;
  ngOnInit(): void {
    this.endpoint.authenticator_user().subscribe({
      next: (data) => { 
        console.log("Retorno", data)
        this.isUserAuth = true;
      },
      error: (err) => {
        if(err instanceof HttpErrorResponse){
          if (err instanceof HttpErrorResponse){
            console.log(err.status, err.error.status)
            if(err.error.status === 401) {
              this.route.navigate(["/login"])
            } else if(err.error.status === 403) { 
              this.route.navigate(["/email-activation"]) 
            }
          }
        if ( err.status === 0 || err.error.status === undefined) { 
          this.route.navigate(["/login"]); 
        }
        }
      }
    })
  }
  logoutUser(): void { 
    this.endpoint.logout_user().subscribe({
      next: () => this.route.navigate(["/login"])
    }) 
  }
}
