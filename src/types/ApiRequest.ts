export interface ApiRequest {
  requestId: string;
  url: string;
  requestHeader: any;
  requestBody: any;
  responseStatusCode: number;
}
