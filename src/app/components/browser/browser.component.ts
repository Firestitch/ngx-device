import { ChangeDetectionStrategy, Input, Component, OnChanges, SimpleChanges } from '@angular/core';
import { DeviceBrowsers } from '../../consts';

import { DeviceBrowser } from '../../enums/device-browser.enum';
import { NgTemplateOutlet } from '@angular/common';
import { FsPopoverModule } from '@firestitch/popover';
import { MatTooltip } from '@angular/material/tooltip';


@Component({
    selector: 'fs-device-browser',
    templateUrl: './browser.component.html',
    styleUrls: ['./browser.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgTemplateOutlet,
        FsPopoverModule,
        MatTooltip,
    ],
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
