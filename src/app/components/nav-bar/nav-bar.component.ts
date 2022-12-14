import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  token: string = '';

  constructor(

  ) {}

  ngOnInit(): void {

  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
