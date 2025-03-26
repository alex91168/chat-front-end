import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  //standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor ( private route: Router ){}
  ngOnInit(): void {
    console.log("Hello world")
    /**
     * Endpoint auth. => 
     * false
     * 
     */
    this.route.navigate(["/login"])
  }
  
}
