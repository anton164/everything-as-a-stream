# Everything as a stream
This repository presents a set of ideas about how you can utilize RxJS to handle most things in your app:
 - decoupling modules
 - managing state
 - handling side effects
 - reasoning about complex data flows
 
It was developed while we embraced functional reactive programming and RxJS to build a new architecture for a large single-page application at Ardoq.

The ideas are presented at JSConf US, so I would recommend to watch the talk if you're curious (will be available online).

In this readme we also reflect on some problems you might encounter when you first start using RxJS and propose how you can overcome them.

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
