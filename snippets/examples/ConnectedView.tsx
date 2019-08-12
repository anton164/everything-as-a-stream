import { connect } from '../reactUtils';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { startWith, map, catchError, pluck, distinctUntilChanged, withLatestFrom } from 'rxjs/operators';
import state$ from './state$';

type ViewProps = {
  isLoading: boolean;
  hasError: boolean;
  refuelCost?: number;
};

const FUEL_CAPACITY = 2000;

const fuelPrice$ = ajax('/api/fuel/price').pipe(
  map(({response}) => response.fuelPrice)
);

const view$ = state$.pipe(
  pluck('fuel'),
  distinctUntilChanged(),
  withLatestFrom(fuelPrice$),
  map(([rocketFuel, fuelPrice]) => ({
    hasError: false,
    isLoading: false,
    refuelCost: FUEL_CAPACITY - rocketFuel * fuelPrice
  })),
  startWith({
    isLoading: true,
    hasError: false
  }),
  catchError(() => of({
    hasError: true,
    isLoading: false
  }))
);

const MyRocket = ({isLoading, hasError, refuelCost} : ViewProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (hasError) {
    return <div>Error...</div>;
  } else {
    return <div>Cost of refueling rocket: ${refuelCost}</div>;
  }
};

const ConnectedRocket = connect<ViewProps>(MyRocket, view$)

export default ConnectedRocket;