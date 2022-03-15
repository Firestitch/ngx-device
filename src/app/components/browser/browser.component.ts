import { ChangeDetectionStrategy, Input, Component, OnChanges, SimpleChanges } from '@angular/core';
import { DeviceBrowsers } from '../../consts';

import { DeviceBrowser } from '../../enums/device-browser.enum';


@Component({
  selector: 'fs-device-browser',
  templateUrl: './browser.component.html',
  styleUrls: [ './browser.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDeviceBrowserComponent implements OnChanges {

  @Input()
  public type: DeviceBrowser = null;

  @Input()
  public version: string = null;

  @Input() 
  public showName = true;
  
  @Input() 
  public iconSize = 24;

  @Input() 
  public showIcon = true;

  public deviceBrowser;

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes.type) {
      this.deviceBrowser = DeviceBrowsers
        .find((deviceBrowser) => {
          return deviceBrowser.type === changes.type.currentValue;
        });
    }
  }

}
