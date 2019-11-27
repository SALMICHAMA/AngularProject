import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar">
<div id="myNavBar">
    <!-- logo -->
    <div class="navbar-brand">
        <a class="navbar-item">
            <img id="image" routerLink="" src="https://img.icons8.com/cotton/64/000000/earth-planet--v1.png">
        </a>
    </div>
    <div class="navbar-brand">
        <button id="button1" routerLink="" >Home page</button>
    </div>
    <div class="navbar-brand">
        <button id="button2" routerLink="/listanimals" >Show All Animals</button>
    </div>
    <div class="navbar-brand">
        <button id="button3" routerLink="/listorgans" >Show All Organs</button>
    </div>
    <div class="navbar-brand">
        <button id="button4" routerLink="/newanimal/add" >Add New Animal</button>
    </div>
</div>
    </nav>
  `,
  styleUrls: [`./header.component.css`]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

