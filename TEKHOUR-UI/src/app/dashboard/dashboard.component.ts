import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
 

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  ngOnInit() {}
  
  navigateToPresenters() {
    this.router.navigate(['/presenters']);
  }
  
}

