import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';


@Injectable({ providedIn: 'root' })
export class FsDeviceIconsFactory {
  public icons = [];

  constructor(
    private _matIconRegistory: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
  ) { }

  public init() {
    this._setConfigIcons();
    this._registration();
  }

  private _setConfigIcons() {
    this.icons = [
      {
        name: 'os_android',
        path: '/assets/device/icons/os-android.svg',
      },
      {
        name: 'os_ios',
        path: '/assets/device/icons/os-ios.svg',
      },
      {
        name: 'os_linux',
        path: '/assets/device/icons/os-linux.svg',
      },
      {
        name: 'os_win',
        path: '/assets/device/icons/os-win.svg',
      },
    ];
  }

  private _registration() {
    this.icons.forEach((icon) => {
      this._matIconRegistory.addSvgIcon(
        icon.name,
        this._domSanitizer.bypassSecurityTrustResourceUrl(icon.path),
      );
    });
  }
}
