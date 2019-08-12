# Everything as a stream
This repository presents a set of code snippets that aim to show how you can utilize RxJS and streams to build an architecture that suits your needs.

The ideas were presented at JSConf US so it's the best to explore the code in this repo [along with the talk](#). It was developed while we embraced functional reactive programming and RxJS to build a new architecture for a large single-page application at Ardoq. 

This is mainly meant to supplement the talk. We're currently in the process of packaging some of these methods and patterns as a library with proper tests and documentation.

## Code snippets
- [action$](https://github.com/anton164/everything-as-a-stream/blob/master/streams/action%24.ts)
- [Routines]()
- [state$]()
- [connect]() _Connect a React view to a stream_
- [createBackboneModelStream] _Create a proxy state observable from a Backbone model_

## Custom operators
- [ofType]() Filter actions emitted from the action$ by a certain type
- [catchErrorLogAndContinue]() Catch an error, log it then keep the stream alive. Useful to make your state streams and routines more robust.
