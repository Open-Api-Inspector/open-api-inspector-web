import { ApiRequest, newApiRequestFromString } from "@/types/ApiRequest";
import { RequestMethod } from "@/types/RequestMethod";

import {
  MessageEventListener,
  StatusEventListener,
} from "./webSocketEvnetListener";

export default class WebSocketAccessManager {
  private static _instance: WebSocketAccessManager;
  static CONNECTION_URL = "ws://localhost:8081/ws";
  _webSocketConnection: WebSocket | undefined;
  private _apiRequestSubscriber: Array<MessageEventListener>;
  private _webSocketStatusSubscriber: Array<StatusEventListener>;
  private _requestData: Array<ApiRequest> = [];

  private constructor() {
    this._apiRequestSubscriber = [];
    this._webSocketStatusSubscriber = [];
    this.connect();
  }

  private connect() {
    this._webSocketConnection = new WebSocket(
      WebSocketAccessManager.CONNECTION_URL
    );
    this._webSocketConnection.addEventListener("message", this._onNewMessage);
    this._webSocketConnection.addEventListener("open", this._onStatusUpdate);
    this._webSocketConnection.addEventListener("close", this._onStatusUpdate);
    this._webSocketConnection.addEventListener("error", this._onStatusUpdate);
  }

  subscribeOnNewRequest(subscriber: MessageEventListener) {
    this._apiRequestSubscriber?.push(subscriber);

    // return this._requestData;
    this._requestData.forEach((data) => {
      console.log(data.method + ": " + data.url + ` (${data.requestId})`);
      subscriber(data);
    });
  }

  _onNewMessage = (event: MessageEvent<string>) => {
    const apiRequestData: ApiRequest = newApiRequestFromString(event.data);
    this._requestData.push(apiRequestData);
    console.log(
      apiRequestData.method +
        ": " +
        apiRequestData.url +
        `(${apiRequestData.requestId})`
    );
    this._apiRequestSubscriber?.forEach((apiRequestEventListener) => {
      apiRequestEventListener(apiRequestData);
    });
  };

  _onStatusUpdate = (event: Event) => {
    console.log(event.type);
    this._webSocketStatusSubscriber?.forEach((updateStatusCallback) => {
      updateStatusCallback(event);
    });
  };

  public get webSocketConnection(): WebSocket {
    return this.webSocketConnection;
  }

  public static get instance(): WebSocketAccessManager {
    if (!WebSocketAccessManager._instance) {
      WebSocketAccessManager._instance = new this();
    }
    return WebSocketAccessManager._instance;
  }
}

WebSocketAccessManager.instance;
