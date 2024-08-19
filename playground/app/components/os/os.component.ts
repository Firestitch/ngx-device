import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DeviceOss } from '@firestitch/device';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsComponent {

  public DeviceOss = DeviceOss;

}
