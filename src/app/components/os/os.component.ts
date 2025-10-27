import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DeviceOs } from '../../enums/device-os.enum';
import { NgClass } from '@angular/common';


@Component({
    selector: 'fs-os',
    templateUrl: './os.component.html',
    styleUrls: ['./os.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass],
})
export class FsOsComponent {

  @Input()
  public os: DeviceOs = null;

  @Input()
  public size = 24;

}
