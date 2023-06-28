import { Component } from '@angular/core';

import { DeviceBrowsers } from '@firestitch/device';


@Component({
  selector: 'device-browser',
  templateUrl: './device-browser.component.html',
  styleUrls: ['./device-browser.component.scss']
})
export class DeviceBrowserComponent {

  public deviceBrowserTypes = [];

  constructor() { 
    this.deviceBrowserTypes = [
      ...DeviceBrowsers.map((deviceBrowser) => {
        return deviceBrowser.type;
      }),
      'badtype',
    ];
  }
}
