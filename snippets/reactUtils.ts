import React from 'react';
import { Observable, Subscription } from 'rxjs';

/**
 * 
 * Connects a React component to a stream.
 * 
 * The streamed props are passed along to the wrapped component
 * and take precedence over props that are passed directly.
 * 
 * If the stream hasn't emitted a value, the component will render empty.
 * 
 */
export function connect<StreamedProps extends object, OwnProps = {}>(
  WrappedComponent: React.ComponentType<StreamedProps & OwnProps>,
  stream: Observable<StreamedProps>
) {
  return class WithStream extends React.Component<OwnProps, StreamedProps> {
    subscription: Subscription;

    constructor(props: OwnProps) {
      super(props);
    }

    componentDidMount() {
      this.subscription = stream.subscribe(state => this.setState(state));
    }

    componentWillUnmount() {
      this.subscription && this.subscription.unsubscribe();
      this.subscription = null;
    }

    render() {
      const _props = {
        ...this.state,
        ...this.props
      };
      return this.state === null
        ? null
        : React.createElement(WrappedComponent, _props);
    }
  };
}