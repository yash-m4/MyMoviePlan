import { Component,ViewChild,OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
ngOnInit(): void {
 
}
  navigateTo(route: string): void {
    // Use router to navigate to the specified route within the outlet
    this.router.navigate([route], { relativeTo: this.activatedRoute });
  }
 
  @ViewChild('sidenav') sidenav?: MatSidenav;
  isExpanded = true;
  admin: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  }
  