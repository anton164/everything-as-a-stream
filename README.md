# Everything as a stream
This repository presents a set of ideas about how you can utilize RxJS to handle several things in your app:
 - decoupling modules
 - managing state
 - handling side effects
 - reasoning about complex data flows
 
The ideas have been developed while we embraced functional reactive programming and RxJS to build a new architecture for a large single-page application at Ardoq.

The ideas were presented at JSConf US so it's the best to explore the ideas in this repo [along with the talk](#).

We've also outlines some problems you might encounter when you first start using RxJS and suggestions on how you can overcome them.

## The 4 building blocks
- Action$
- Routines
- State$
- Views as pure functions of strems

## Roadblocks 
- Dead streams?
- Hot vs. cold
- Debugging
- Streams all over the place?
