# Everything as a stream
This repository presents a set of code snippets that aim to show how you can utilize RxJS and streams to build an architecture that suits your needs.

The ideas were presented at JSConf US so it's the best to explore the code in this repo [along with the talk](https://www.youtube.com/watch?v=vd5S_7Qm9WE). It was developed while we embraced functional reactive programming and RxJS to build a new architecture for a large single-page application at Ardoq. 

This is mainly meant to supplement the talk. We're currently in the process of packaging some of these methods and patterns as a library with proper tests and documentation.

## Code snippets
- [action$](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/action%24.ts) - _the action stream_
- [Routines](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/examples/routines.ts) - _Routines example_
- [state$](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/examples/state%24.ts) - _state$ example_
- [Views as a function of streams](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/examples/ConnectedView.tsx) - _Shows how you can connect a React view to a stream_

## Utility methods
- [createStateStream](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/stateStreamUtils.ts#L44) - _API for centralizing state stream creation_
- [connect](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/reactUtils.ts#L14) - _connect a React view to a stream_
- [createBackboneModelStream](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/stateStreamUtils.ts#L15) - _create a proxy state observable from a Backbone model_

## Custom operators
- [ofType](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/operators.ts#L5) - _filter actions emitted from the action$ by a certain type_
- [catchErrorLogAndContinue](https://github.com/anton164/everything-as-a-stream/blob/master/snippets/operators.ts#L17) - _keeps your stream alive on error, useful to make your streams more robust_
