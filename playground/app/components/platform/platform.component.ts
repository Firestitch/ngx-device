import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DevicePlatforms } from '@firestitch/device';
import { FsDevicePlatformComponent } from '../../../../src/app/components/device-platform/device-platform.component';

@Component({
    selector: 'app-platform',
    templateUrl: './platform.component.html',
    styleUrls: ['./platform.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsDevicePlatformComponent],
})
export class PlatformComponent {

  public DevicePlatforms = DevicePlatforms;

}
