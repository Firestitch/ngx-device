import { Component } from '@angular/core';

import { DeviceType, DeviceOs, DeviceOss } from '@firestitch/device';

@Component({
  selector: 'device-os',
  templateUrl: './device-os.component.html',
  styleUrls: ['./device-os.component.scss']
})
export class DeviceOsComponent {

  public DeviceType = DeviceType;
  public DeviceOs = DeviceOs;
  public DeviceOss = DeviceOss;

  constructor() { }
}
