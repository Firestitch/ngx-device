import { getDevice } from './get-device';

export function getCurrentDevice() {
  return getDevice(window.navigator.userAgent);
}

