import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DeviceOs, DeviceOss, DeviceType } from '@firestitch/device';

@Component({
  selector: 'device-os',
  templateUrl: './device-os.component.html',
  styleUrls: ['./device-os.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceOsComponent {

  public DeviceType = DeviceType;
  public DeviceOs = DeviceOs;
  public DeviceOss = DeviceOss;

  constructor() { }
}
