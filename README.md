# Everything as a stream
[From the Redux docs](https://redux.js.org/introduction/prior-art#rxjs):
> The question is: do you really need Redux if you already use Rx? Maybe not. It's not hard to re-implement Redux in Rx. Some say it's a two-liner using Rx .scan() method. It may very well be!

We've taken on the challenge and modelled everything as a stream. This repository presents a set of examples of how you can utilize RxJS and streams to build an architecture that suits your needs.

The ideas were presented at JSConf US so it's the best to explore the code in this repo [along with the talk](#). It was developed while we embraced functional reactive programming and RxJS to build a new architecture for a large single-page application at Ardoq.

## The 4 building blocks
- action$
- Routines
- state$
- Views as Pure Functions of Streams

## Utility methods
- Creating proxy state from Backbone models
- Connecting a view to a stream 