import { ApiRequest } from "@/types/ApiRequest";
import { ApiRequestEventListener } from "./apiRequestEventListener";
import { WebSocketStatusEventListener } from "./websocketStatusEventListener";

export class WebSocketAccessManager {
  private static _instance: WebSocketAccessManager;
  static CONNECTION_URL: string = "ws://localhost:8081/ws";
  _webSocketConnection: WebSocket | undefined;
  _apiRequestSubscriber: Array<ApiRequestEventListener> = [];
  _webSocketStatusSubscriber: Array<WebSocketStatusEventListener> = [];

  private WebSocketAccessManager() {}

  public connect() {
    this._webSocketConnection = new WebSocket(
      WebSocketAccessManager.CONNECTION_URL
    );
    this._webSocketConnection.addEventListener("message", this._onNewMessage);
  }

  public subscribeOnNewRequest(subscriber: ApiRequestEventListener) {
    this._apiRequestSubscriber.push(subscriber);
  }

  private _onNewMessage(event: MessageEvent<any>) {
    console.log(event);
    // Parse the event to be ApiRequest.
    this._apiRequestSubscriber.forEach((apiRequestEventListener) => {
      // apiRequestEventListener.onNewRequest();
    });
  }

  private _onStatusUpdate(event: MessageEvent<any>) {}

  public get webSocketConnection(): WebSocket {
    return this.webSocketConnection;
  }

  public static get instance(): WebSocketAccessManager {
    if (WebSocketAccessManager._instance == null) {
      WebSocketAccessManager._instance = new WebSocketAccessManager();
    }
    return WebSocketAccessManager._instance;
  }
}
