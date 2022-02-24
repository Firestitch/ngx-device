import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { DeviceBrowsers } from '../../consts';

import { DeviceBrowser } from '../../enums/device-browser.enum';


@Component({
  selector: 'fs-device-browser',
  templateUrl: './browser.component.html',
  styleUrls: [ './browser.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDeviceBrowserComponent {

  @Input()
  public type: DeviceBrowser = null;

  @Input()
  public version: string = null;

  @Input()
  public set showName(showName: boolean) {
    if(showName) {
      const deviceBrowser = DeviceBrowsers
        .find((deviceBrowser) => {
          return deviceBrowser.type === this.type;
        });
      this.name = deviceBrowser?.name;
    }
  };

  public name;

  constructor() {
   }

}
