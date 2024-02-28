import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface customHeaderInterface {
  title: string;
}

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomHeaderComponent {

  @Input() config: customHeaderInterface | undefined;

}
