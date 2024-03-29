import { ChangeDetectionStrategy, Input, Component, OnInit } from '@angular/core';


@Component({
  selector: 'fs-device-cordova',
  templateUrl: './cordova.component.html',
  styleUrls: [ './cordova.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsDeviceCordovaComponent implements OnInit {

  @Input()
  public version = '';

  @Input()
  public meta;

  public metas = [];

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
