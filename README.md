# @unction/replacewhen

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateFunctionType<A> => B => Function

Replaces values in an functor with another value based on a predicate.

``` javascript
replaceWhen(isEven)(null)([1, 2, 3]) // [1, null, 3]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/replaceWhen.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/replaceWhen.svg?maxAge=2592000&style=flat-square
