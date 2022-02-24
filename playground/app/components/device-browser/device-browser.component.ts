import { Component } from '@angular/core';

import { DeviceBrowsers } from '@firestitch/device';

@Component({
  selector: 'device-browser',
  templateUrl: './device-browser.component.html',
  styleUrls: ['./device-browser.component.scss']
})
export class DeviceBrowserComponent {

  public DeviceBrowsers = DeviceBrowsers;

  constructor() { }
}
