import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  headerConfig = {
    title: 'Navigation with Dinamic Components'
  }

  footerConfig = {
    title: 'Navigation with Dinamic Components Footer'
  }

  constructor() {}

}
