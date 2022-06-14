import { ApiRequest } from "@/types/ApiRequest";

export type MessageEventListener = (event: ApiRequest) => any;
export type StatusEventListener = (event: Event) => any;
