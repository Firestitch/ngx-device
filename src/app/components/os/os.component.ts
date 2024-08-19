import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DeviceOs } from '../../enums/device-os.enum';


@Component({
  selector: 'fs-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsOsComponent {

  @Input()
  public os: DeviceOs = null;

  @Input()
  public size = 24;

}
