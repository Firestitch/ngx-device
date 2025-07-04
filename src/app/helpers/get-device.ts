import { IResult, UAParser } from 'ua-parser-js';

export function getDevice(userAgent: string): { 
  mobile: boolean,
} & IResult {
  const parser = new UAParser(userAgent);
  const parserResults = parser.getResult();
  const mobile = ['mobile', 'tablet', 'smarttv', 'wearable', 'embedded']
    .includes(parserResults?.device.type);
  
  return {
    mobile,
    ...parserResults,
  };
}

