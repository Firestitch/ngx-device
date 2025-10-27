import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DeviceOs, DeviceOss, DeviceType } from '@firestitch/device';
import { FsDeviceOsComponent } from '../../../../src/app/components/device-os/device-os.component';

@Component({
    selector: 'device-os',
    templateUrl: './device-os.component.html',
    styleUrls: ['./device-os.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsDeviceOsComponent],
})
export class DeviceOsComponent {

  public DeviceType = DeviceType;
  public DeviceOs = DeviceOs;
  public DeviceOss = DeviceOss;

}
