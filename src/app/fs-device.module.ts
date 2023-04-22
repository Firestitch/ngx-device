import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';

import { FsListModule } from '@firestitch/list';
import { FsDateModule } from '@firestitch/date';
import { FsCountryModule } from '@firestitch/country';
import { FsPopoverModule } from '@firestitch/popover';

import { FsDeviceBrowserComponent } from './components/browser/browser.component';
import { FsDeviceOsComponent } from './components/os/os.component';

import { FsDeviceIconsFactory } from './helpers/icons.factory';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

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
  ],
  declarations: [
    FsDeviceBrowserComponent,
    FsDeviceOsComponent,
  ],
  providers: [],
})
export class FsDeviceModule {
  static forRoot(): ModuleWithProviders<FsDeviceModule> {
    return {
      ngModule: FsDeviceModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: function (iconFactory: FsDeviceIconsFactory) {
            return () => iconFactory.init();
          },
          multi: true,
          deps: [ FsDeviceIconsFactory ]
        },
      ]
    };
  }
}
