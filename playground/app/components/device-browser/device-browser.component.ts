import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DeviceBrowsers } from '@firestitch/device';
import { FsDeviceBrowserComponent } from '../../../../src/app/components/browser/browser.component';


@Component({
    selector: 'device-browser',
    templateUrl: './device-browser.component.html',
    styleUrls: ['./device-browser.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsDeviceBrowserComponent],
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
