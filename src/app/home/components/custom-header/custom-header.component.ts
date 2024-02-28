import { Component, Input } from '@angular/core';

export interface customHeaderInterface {
  title: string;
}

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent {

  @Input() config: customHeaderInterface | undefined;

}
