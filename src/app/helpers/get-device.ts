import { UAParser } from 'ua-parser-js';

export function getDevice(userAgent): { mobile: boolean } {
  let parser = new UAParser(userAgent);

  let parserResults = parser.getResult();

  const mobile = ['mobile', 'tablet', 'smarttv', 'wearable', 'embedded']
    .includes(parserResults?.device.type);
  
  return {
    mobile
  };
}

