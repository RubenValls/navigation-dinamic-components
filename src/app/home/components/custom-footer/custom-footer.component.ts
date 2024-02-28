import { Component, Input, OnInit } from '@angular/core';

export interface customFooterInterface {
  title: string;
}

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss'],
})
export class CustomFooterComponent {

  @Input() config: customFooterInterface | undefined;

}
