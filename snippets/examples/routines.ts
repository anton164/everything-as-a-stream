import { Action$ } from '../types';
import { dispatchAction } from '../action$';
import { ofType } from '../operators';
import { switchMap, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

type LaunchRocketPayload = {
  destination: string
};

const fetchCoordinates = (destination: string) => 
  ajax(`/api/rocket/coordinates/${destination}`);

/**
 * 
 * Routines should be started
 * when the module is loaded 
 * (normally when the application starts)
 */
const startRoutines = (action$: Action$) => [
  action$.pipe(
    ofType<LaunchRocketPayload>('LAUNCH_ROCKET_REQUEST'),
    switchMap(({ destination }) => fetchCoordinates(destination)),
    tap(({ response }) => dispatchAction({
      type: 'LAUNCH_ROCKET_INIT',
      coordinates: response.coordinates
    }))
  ).subscribe()
];

export default startRoutines;