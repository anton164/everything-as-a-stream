# Everything as a stream
This repository presents a set of code snippets that aim to show how you can utilize RxJS and streams to build an architecture that suits your needs.

The ideas were presented at JSConf US so it's the best to explore the code in this repo [along with the talk](#). It was developed while we embraced functional reactive programming and RxJS to build a new architecture for a large single-page application at Ardoq. 

This is mainly meant to supplement the talk. We're currently in the process of packaging some of these methods and patterns as a library with proper tests and documentation.

## Code snippets
- [action$](https://github.com/anton164/everything-as-a-stream/blob/master/streams/action%24.ts) - _the action stream_
- [Routines]() - _Routines example_
- [state$]() - _state$ example_

## Utility methods
- [createStateStream]() - _API for centralizing state stream creation_
- [connect]() - _connect a React view to a stream_
- [createBackboneModelStream]() - _create a proxy state observable from a Backbone model_

## Custom operators
- [ofType]() - _filter actions emitted from the action$ by a certain type_
- [catchErrorLogAndContinue]() - _keeps your stream alive on error, useful to make your streams more robust_
