import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { DeviceBrowserComponent } from '../device-browser/device-browser.component';
import { DeviceOsComponent } from '../device-os/device-os.component';
import { OsComponent } from '../os/os.component';
import { CurrentDeviceComponent } from '../current-device/current-device.component';


@Component({
    templateUrl: './examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsExampleModule,
        DeviceBrowserComponent,
        DeviceOsComponent,
        OsComponent,
        CurrentDeviceComponent,
    ],
})
export class ExamplesComponent {
  public config = environment;
}
