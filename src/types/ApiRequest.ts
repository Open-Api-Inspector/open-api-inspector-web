import { RequestMethod } from "./RequestMethod";

export interface ApiRequest {
  method: RequestMethod;
  requestId: string;
  url: string;
  requestHeader: any;
  requestBody: any;
  responseStatusCode: number;
}
