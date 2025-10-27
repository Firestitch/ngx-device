import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { DeviceOsIcons } from '../../consts/device-os-icons.const';
import { DeviceOss } from '../../consts/device-oss.const';
import { DeviceTypeIcons } from '../../consts/device-type-icons.const';
import { DeviceOs } from '../../enums/device-os.enum';
import { DeviceType } from '../../enums/device-type.enum';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { FsPopoverModule } from '@firestitch/popover';
import { FsDeviceOsMetaComponent } from '../os-meta/os-meta.component';


@Component({
    selector: 'fs-device-os',
    templateUrl: './device-os.component.html',
    styleUrls: ['./device-os.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgTemplateOutlet,
        FsPopoverModule,
        NgClass,
        FsDeviceOsMetaComponent,
    ],
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
          value: this.meta[name],
        }));
    }
  }

}
