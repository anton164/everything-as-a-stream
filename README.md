# Everything as a stream
[From the Redux docs](https://redux.js.org/introduction/prior-art#rxjs):
> The question is: do you really need Redux if you already use Rx? Maybe not. It's not hard to re-implement Redux in Rx. Some say it's a two-liner using Rx .scan() method. It may very well be!

We've taken on Redux' challenge and modelled everything as a stream. This repository presents a set of ideas about how you can utilize RxJS and streams to handle most things in your app:
 - state management
 - computing derived state with memoization, while keeping views dead simple 
 - handling side effects (async data flows)
 - interop with legacy code (decoupling modules and proxying state)
 
This is not a framework to solve all your problems, but rather an example of how you can use the power of RxJS and streams to suit your needs.

The ideas were presented at JSConf US so it's the best to explore the ideas in this repo [along with the talk](#). They were developed while we embraced functional reactive programming and RxJS to build a new architecture for a large single-page application at Ardoq.

We've also outlined some problems you might encounter when you first start using RxJS and suggestions on how you can overcome them.

## The 4 building blocks
- The Action Stream
- Routines
- State Streams
- Views as Pure Functions of Streams

## Roadblocks 
- Dead streams?
- Hot vs. cold streams (multicast vs unicast)
- Debugging
- Streams all over the place?
