import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'fs-device-os-meta',
  templateUrl: './os-meta.component.html',
  styleUrls: ['./os-meta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDeviceOsMetaComponent implements OnInit {

  @Input()
  public meta;

  public names = [];
  public objects = {};

  public ngOnInit(): void {
    if(this.meta) {
      this.names = Object.keys(this.meta);
      this.objects = Object.keys(this.meta)
        .reduce((accum, name) => {
          return {
            ...accum,
            [name]:  typeof this.meta[name] === 'object',
          };
        }, {});
    }
  }
}
