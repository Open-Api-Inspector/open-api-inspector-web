import { RequestMethod, requestMethodFromString } from "./RequestMethod";

export interface ApiRequest {
  method: RequestMethod;
  requestId: string;
  url: string;
  requestHeader: any;
  requestBody: any;
  responseStatusCode: number;
}

export function newApiRequestFromString(data: string): ApiRequest {
  const parsedData = JSON.parse(data);
  return {
    requestId: parsedData.requestId,
    url: parsedData.url,
    requestHeader: parsedData.requestHeader,
    requestBody: parsedData.requestBody,
    responseStatusCode: parsedData.responseStatusCode,
    method: requestMethodFromString(parsedData.requestMethod),
  } as ApiRequest;
}
