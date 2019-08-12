import { Observable, Subscriber } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { catchErrorLogAndContinue } from './operators';
import { tag } from 'rxjs-spy/operators';

/**
 * 
 * Creates a proxy state stream from 
 * a backbone model.
 * 
 * The stream will emit the model attributes
 * when the backbone model is synced with the server.
 * 
 */
export const createBackboneModelStream = <T>(
  model: Backbone.Model
): Observable<T> =>
  Observable.create((observer: Subscriber<T>) => {
    observer.next(model.toJSON());
    model.on('sync', () => observer.next(model.toJSON()), observer);
    return () => model.off(undefined, undefined, observer);
  }).pipe(shareReplay({ bufferSize: 1, refCount: true }));

type StateStreamOptions = {
  debugName: string;
};

type CreateStateStream<StateShape> = StateStreamOptions & {
  createStream(...streams: Observable<any>[]): Observable<StateShape>;
};

/**
 *
 * API for creating a state stream
 *
 * This allows you to provide a createStream method
 * that takes an arbitrary number of streams and returns a stream creator
 *
 * The API ensures that the state stream is hot, tagged with RxJS spy
 * and adds "catchErrorLogAndContinue" to ensure that
 * the stream lives on when it throws an error.
 *
 */
export function createStateStream<StateShape>({
  debugName,
  createStream,
}: CreateStateStream<StateShape>) {
  return (...streams: Observable<any>[]) => {
    return createStream(...streams).pipe(
      catchErrorLogAndContinue(),
      shareReplay({ bufferSize: 1, refCount: true }),
      tag(`state$-${debugName}`)
    );
  };
}