export abstract class WebSocketStatusEventListener {
  public abstract onUpdate(event: MessageEvent<any>): void;
}
