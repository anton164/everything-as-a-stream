import { Observable } from 'rxjs';

export type ActionType = string;

export type Action<TPayload> = {
  type: ActionType;
} & TPayload;

export type SomePayload = {
  [key: string]: any;
};
export type ActionShape = Action<SomePayload>;

export type Action$ = Observable<ActionShape>;