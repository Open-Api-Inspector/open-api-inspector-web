import { ApiRequest } from "@/types/ApiRequest";

export abstract class ApiRequestEventListener {
  public abstract onNewRequest(apiRequest: ApiRequest): void;
}
