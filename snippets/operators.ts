import { ActionType, Action } from './types';
import { OperatorFunction, Observable } from 'rxjs';
import { filter, catchError } from 'rxjs/operators';

export function ofType<P>(
  ...keys: ActionType[]
): OperatorFunction<Action<any>, Action<P>> {
  return source => {
    const keySet = new Set(keys);
    return source.pipe(filter(({ type }) => keySet.has(type)));
  };
}

/**
 * Operator used to keep streams alive.
 */
export const catchErrorLogAndContinue = <T>(): OperatorFunction<T, T> => {
  return (source: Observable<T>) =>
    source.pipe(
      catchError((error, stream) => {
        console.error(error);
        return stream;
      })
    );
};