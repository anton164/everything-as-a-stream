import { Observable, Subscriber } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

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
