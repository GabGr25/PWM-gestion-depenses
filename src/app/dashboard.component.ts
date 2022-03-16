import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>L'application gestion des dépenses</h2>
    <img src="https://p4.wallpaperbetter.com/wallpaper/841/508/1001/technology-other-wallpaper-preview.jpg">
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
