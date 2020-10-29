import { RequestListener } from "http";

export interface IApp {
    getAppInstance(): RequestListener
}