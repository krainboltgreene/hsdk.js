# hsdk

hsdk stands for HATEOAS Software Development Kit. This library reads from a specified 'application metadata' endpoint and generates an HTTP HATEOAS API client.

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

``` javascript
import hsdk from "hsdk"

hsdk({protocol: "http", host: "hsdkjs.getsandbox.com", root: "v1/resources"})
  .then((client) => client("v1Accounts").list())
  .then((value) => console.log(value))
```


## jsonapi-home

Much like [json-home](https://mnot.github.io/I-D/json-home/), a fantastic spec by @mnot, jsonapi-home is an attempt to allow clients to build themselves.

For this to work you need a server that responds to `GET` requests, specifically as defined by the `hsdk` client.

Using the example above, we need a HTTP server running on `localhost:8080` that responds to `http` requests to `GET /v1/resources`.

Here is a sample CURL-based request (an example of what hsdk does under the hood):

``` bash
curl -X "GET" "http://hsdkjs.getsandbox.com/v1/resources" \
     -H "Accept: application/vnd.api+json" \
     -H "Accept-Encoding: gzip, identity"
```

Each resource MUST have the following properties:

  - intent: The human name for this result, example: `list`, `show`, `create`, `destroy`, `update`
  - namespace: The groupings this resource is under, can be anything
  - description: A short description for the resource
  - method: The HTTP verb used
  - href: A RFC 6570 URL template that the client can use directly
  - mediatype: The preferred mediatype for this endpoint
  - allowed (FUTURE): An allowed list of fields
  - query (FUTURE): An allowed list of query parameter names

That response will look like this:

``` http
HTTP/1.1 200 OK
Content-Type: application/json
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Methods: GET,POST,PUT,DELETE,PATCH,OPTIONS
Access-Control-Allow-Origin: *
Transfer-Encoding: chunked
Date: Mon, 28 Nov 2016 19:50:32 GMT
Via: 1.1 google
Connection: close

{
  "links": {
    "self": "http://hsdkjs.getsandbox.com/v1/resources",
    "next": "http://hsdkjs.getsandbox.com/v1/resources?page[offset]=2",
    "last": "http://hsdkjs.getsandbox.com/v1/resources?page[offset]=10"
  },
  "data": [
    {
      "id": "v1-accounts-list",
      "type": "resources",
      "attributes": {
        "intent": "list",
        "namespace": "v1/accounts",
        "description": "List accounts.",
        "method": "GET",
        "href": "http://hsdkjs.getsandbox.com/v2/accounts",
        "query": {
          "filter": true,
          "sort": true
        },
        "mediatype": "application/vnd.api+json; version=1"
      },
      "links": {
        "self": "http://hsdkjs.getsandbox.com/v1/resources/v1-accounts-list"
      }
    },
    {
      "id": "v1-accounts-show",
      "type": "resources",
      "attributes": {
        "intent": "show",
        "namespace": "v1/accounts",
        "description": "Show an individual account.",
        "method": "GET",
        "href": "http://hsdkjs.getsandbox.com/v1/accounts/{id}",
        "query": {
          "fields": true
        },
        "mediatype": "application/vnd.api+json; version=1"
      },
      "links": {
        "self": "http://hsdkjs.getsandbox.com/v1/resources/v1-accounts-show"
      }
    },
    {
      "id": "v1-accounts-update",
      "type": "resources",
      "attributes": {
        "intent": "update",
        "namespace": "v1/accounts",
        "description": "Update an individual account.",
        "method": "PATCH",
        "href": "http://hsdkjs.getsandbox.com/v1/accounts/{id}",
        "allowed": [
          [
            "data",
            "attributes",
            "age"
          ]
        ],
        "mediatype": "application/vnd.api+json; version=1"
      },
      "links": {
        "self": "http://hsdkjs.getsandbox.com/v1/resources/v1-accounts-update"
      }
    }
  ]
}
```



[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/hsdk.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/hsdk.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/hsdk.js.svg?maxAge=2592000&style=flat-square
