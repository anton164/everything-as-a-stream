import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { tag } from 'rxjs-spy/operators';
import { ActionShape } from './types';

const createActionStream = () => new Subject<ActionShape>();
const actionSubject$ = createActionStream();

export const action$ = actionSubject$.pipe(
  tag('action$'),
  share()
);
export const dispatchAction = (action: ActionShape) => {
  actionSubject$.next(action);
};