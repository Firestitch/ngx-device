import { ChangeDetectionStrategy, Input, Component, OnInit } from '@angular/core';

import { DeviceType } from '../../enums/device-type.enum';
import { DeviceOs } from '../../enums/device-os.enum';

import { DeviceOsIcons } from '../../consts/device-os-icons.const';
import { DeviceTypeIcons } from '../../consts/device-type-icons.const';
import { DeviceOss } from '../../consts/device-oss.const';


@Component({
  selector: 'fs-device-os',
  templateUrl: './os.component.html',
  styleUrls: [ './os.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDeviceOsComponent implements OnInit {

  @Input()
  public type: DeviceType = null;

  @Input()
  public os: DeviceOs = null;

  @Input()
  public meta: any;

  @Input()
  public showName = false;

  @Input()
  public version = '';

  public DeviceOsIcons = DeviceOsIcons;
  public DeviceOss = {};
  public metas = [];

  public DeviceTypeIcons = DeviceTypeIcons;
  public DeviceType = DeviceType;

  constructor() {
    this.DeviceOss = DeviceOss.reduce((accum, item) => {
      accum[item.type] = item.name;
      return accum;
    }, {});
  }

  public ngOnInit(): void {
    if(this.meta) {
     this.metas = Object.keys(this.meta)
        .map((name) => ({
          name: name.charAt(0).toUpperCase() + name.slice(1),
          value: this.meta[name]
        }));
    }
  }

}
