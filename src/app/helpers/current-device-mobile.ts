import { getCurrentDevice } from './get-current-device';

export function currentDeviceMobile(): boolean {
  return !!getCurrentDevice()?.mobile;
}

