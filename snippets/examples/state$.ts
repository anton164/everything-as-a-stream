import { scan } from 'rxjs/operators';
import { createStateStream } from '../stateStreamUtils';
import { action$ } from '../action$';

const defaultState = {
  fuel: 1000
};

const state$ = createStateStream({
  debugName: 'rocket',
  createStream: (action$) =>
    action$.pipe(
      scan((state, { type, ...payload }) => {
        if (type === 'LAUNCH_ROCKET_INIT') return {
          ...state,
          fuel: state.fuel - 100
        };
      }, defaultState))
});

export default state$(action$);