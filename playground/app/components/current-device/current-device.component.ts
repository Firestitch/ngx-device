import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getCurrentDevice } from 'src/app/helpers';

@Component({
  selector: 'app-current-device',
  templateUrl: './current-device.component.html',
  styleUrls: ['./current-device.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentDeviceComponent {

  public device;

  constructor() {
    this.device = getCurrentDevice();
   }
}
