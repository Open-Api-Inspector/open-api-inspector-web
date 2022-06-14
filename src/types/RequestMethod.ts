export enum RequestMethod {
  GET,
  POST,
  PATCH,
  DELETE,
  UNKNOWN,
}

export function requestMethodFromString(data: string): RequestMethod {
  data = data?.toUpperCase();
  switch (data) {
    case "GET":
      return RequestMethod.GET;
    case "POST":
      return RequestMethod.POST;
    case "PATCH":
      return RequestMethod.PATCH;
    case "DELETE":
      return RequestMethod.DELETE;
    default:
      return RequestMethod.UNKNOWN;
  }
}
