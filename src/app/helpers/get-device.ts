import { UAParser } from 'ua-parser-js';

export function getDevice(userAgent): { 
  mobile: boolean,
  type: string,
  vendor: string,
  model: string,
} {
  const parser = new UAParser(userAgent);

  const parserResults = parser.getResult();

  const mobile = ['mobile', 'tablet', 'smarttv', 'wearable', 'embedded']
    .includes(parserResults?.device.type);
  
  return {
    mobile,
    type: parserResults?.device.type || null,
    vendor: parserResults?.device.vendor || null,
    model: parserResults?.device.model || null,
  };
}

