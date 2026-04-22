import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FsPopoverModule } from '@firestitch/popover';

import { DevicePlatforms } from '../../consts/device-platforms.const';
import { DevicePlatform } from '../../enums/device-platform.enum';


@Component({
  selector: 'fs-device-platform',
  templateUrl: './device-platform.component.html',
  styleUrls: ['./device-platform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FsPopoverModule,
    NgIf,
  ],
})
export class FsDevicePlatformComponent implements OnChanges {

  @Input()
  public type: DevicePlatform = null;

  @Input()
  public showName = true;

  @Input()
  public iconSize = 24;

  @Input()
  public showIcon = true;

  public devicePlatform;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      this.devicePlatform = DevicePlatforms
        .find((devicePlatform) => {
          return devicePlatform.type === changes.type.currentValue;
        });
    }
  }

}
