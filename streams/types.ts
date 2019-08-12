export type ActionType = symbol;

export type Action<TPayload> = {
  type: ActionType;
} & TPayload;

export type SomePayload = {
  [key: string]: any;
};
export type ActionShape = Action<SomePayload>;