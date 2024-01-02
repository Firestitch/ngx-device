import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FsCountryModule } from '@firestitch/country';
import { FsDateModule } from '@firestitch/date';
import { FsListModule } from '@firestitch/list';
import { FsPopoverModule } from '@firestitch/popover';

import {
  FsDeviceBrowserComponent, FsDeviceCordovaComponent, FsDeviceOsComponent,
} from './components';
import { FsDeviceIconsFactory } from './helpers/icons.factory';


@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatTooltipModule,

    FsListModule,
    FsDateModule,
    FsCountryModule,
    FsPopoverModule,
  ],
  exports: [
    FsDeviceBrowserComponent,
    FsDeviceOsComponent,
    FsDeviceCordovaComponent,
  ],
  declarations: [
    FsDeviceBrowserComponent,
    FsDeviceOsComponent,
    FsDeviceCordovaComponent,
  ],
  providers: [],
})
export class FsDeviceModule {
  public static forRoot(): ModuleWithProviders<FsDeviceModule> {
    return {
      ngModule: FsDeviceModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory (iconFactory: FsDeviceIconsFactory) {
            return () => iconFactory.init();
          },
          multi: true,
          deps: [FsDeviceIconsFactory],
        },
      ],
    };
  }
}
