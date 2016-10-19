# hsdk

hsdk stands for HATEOAS Software Development Kit. This library reads from a specified 'application metadata' endpoint and generates an HTTP HATEOAS API client.

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

``` javascript
import hsdk from "hsdk"

hsdk({protocol: "http", host: "localhost:8080", root: "v1/resources"})
  .then((client) => client.v1Accounts.list())
  .then((response) => response.json())
  .then((value) => console.log(value))
```


[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/hsdk.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/hsdk.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/hsdk.js.svg?maxAge=2592000&style=flat-square
