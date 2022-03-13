import { ChangeDetectionStrategy, Input, Component } from '@angular/core';

import { DeviceType } from '../../enums/device-type.enum';
import { DeviceOs } from '../../enums/device-os.enum';

import { DeviceOsIcons } from '../../consts/device-os-icons.const';
import { DeviceTypeIcons } from '../../consts/device-type-icons.const';
import { DeviceOss } from '../../consts/device-oss.const';
import { nameValue } from '@firestitch/common';


@Component({
  selector: 'fs-device-os',
  templateUrl: './os.component.html',
  styleUrls: [ './os.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDeviceOsComponent {

  @Input()
  public type: DeviceType = null;

  @Input()
  public os: DeviceOs = null;

  @Input()
  public showName = false;

  @Input()
  public version = '';

  public DeviceOsIcons = DeviceOsIcons;
  public DeviceOss = {};

  public DeviceTypeIcons = DeviceTypeIcons;
  public DeviceType = DeviceType;
  public name;

  constructor() {
    this.DeviceOss = DeviceOss.reduce((accum, item) => {
      accum[item.type] = item.name;
      return accum;
    }, {});
  }

}
