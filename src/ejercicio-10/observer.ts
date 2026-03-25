import { Observable } from "./observable.js";

export interface Observer {
  update(observable: Observable): void;
}