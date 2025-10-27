import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DeviceOss } from '@firestitch/device';
import { FsOsComponent } from '../../../../src/app/components/os/os.component';

@Component({
    selector: 'app-os',
    templateUrl: './os.component.html',
    styleUrls: ['./os.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsOsComponent],
})
export class OsComponent {

  public DeviceOss = DeviceOss;

}
