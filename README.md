# hsdk

[![Greenkeeper badge](https://badges.greenkeeper.io/krainboltgreene/hsdk.js.svg)](https://greenkeeper.io/)

hsdk stands for HATEOAS Software Development Kit. This library reads from a specified 'application metadata' endpoint and generates an HTTP HATEOAS API client.

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


Example at play: https://esnextb.in/?gist=1ddc4e3e62196c8b9542b87a6141dff4


## using

First you need to define your core sdk and in this example we'll our jsonapi.org specification-compliant endpoint:

``` javascript
import hsdk from "hsdk"

const sdk = hsdk({
  url: "https://hsdkjs.getsandbox.com/v1/resources",
  headers: {
    Accept: "application/vnd.api+json",
  },
}})
```

`sdk` above is a `Promise` based on a request/response to/from the home resource.

Now we can start making requests to our api, discovered 🌟magically🌟:

``` javascript
sdk
  .then((client) => client.accounts.v1.list())
  .then((response) => console.log({message: "List", payload: response.data}))
```

That will `log` a list of accounts.

``` javascript
sdk
  .then((client) => client.accounts.v1.show({id: "1"}))
  .then((response) => console.log({message: "Show", payload: response.data}))
```

This will `log` a single account, with the `id` of `1`

``` javascript
sdk
  .then((client) => {
    return client.accounts.v1.update({
      id: "1",
      payload: {
        data: {
          id: "1",
          type: "accounts",
          attributes: {
            age: 29
          }
        }
      }
    })
  })
  .then((response) => console.log({message: "Update", payload: response.data}))
```

In `POST`, `PATCH`, or `PUT` requests (mutations) `hsdk` expects a `payload` value that it uses in the body. This `update` request will update the age of `accounts/1` to `29`.

hsdk doesn't care what kind of API you have, only that it is discoverable via `jsonapi-home`.


## jsonapi-home

Much like [json-home](https://mnot.github.io/I-D/json-home/), a fantastic spec by @mnot, jsonapi-home is an attempt to allow clients to build themselves.

Using the example above, we need a HTTP server running at `http://hsdkjs.getsandbox.com` that responds to `GET /v1/resources` requests.

Here is a sample CURL-based request (an example of what hsdk does under the hood):

``` bash
curl -X "GET" "http://hsdkjs.getsandbox.com/v1/resources" \
     -H "Accept: application/vnd.api+json"
```

Each resource MUST have the following properties:

  - intent: The human name for this result, example: `list`, `show`, `create`, `destroy`, `update`
  - namespace: The groupings this resource is under, can be anything
  - version: The version of the endpoint, if no version you SHOULD use `latest`
  - description: A short description for the resource
  - method: The HTTP verb used
  - href: A RFC 6570 URL template that the client can use directly
  - mediatype: The preferred mediatype for this endpoint
  - allowed (FUTURE): An allowed list of fields
  - query (FUTURE): An allowed list of query parameter names

That response will look like this:

``` http
HTTP/1.1 200 OK
Accept: application/vnd.api+json
Content-Type: application/vnd.api+json
Date: Mon, 28 Nov 2016 19:50:32 GMT

{
  "links": {
    "self": "https://hsdkjs.getsandbox.com/v1/resources",
    "next": "https://hsdkjs.getsandbox.com/v1/resources?page[offset]=2",
    "last": "https://hsdkjs.getsandbox.com/v1/resources?page[offset]=10"
  },
  "data": [
    {
      "id": "accounts-v1-list",
      "type": "resources",
      "attributes": {
        "intent": "list",
        "namespace": "accounts",
        "version": "v1",
        "description": "List accounts.",
        "method": "GET",
        "href": "https://hsdkjs.getsandbox.com/v1/accounts",
        "query": {
          "filter": true,
          "sort": true
        },
        "mediatype": "application/vnd.api+json"
      },
      "links": {
        "self": "https://hsdkjs.getsandbox.com/v1/resources/accounts-v1-list"
      }
    },
    {
      "id": "accounts-v1-show",
      "type": "resources",
      "attributes": {
        "intent": "show",
        "namespace": "accounts",
        "version": "v1",
        "description": "Show an individual account.",
        "method": "GET",
        "href": "https://hsdkjs.getsandbox.com/v1/accounts/{id}",
        "query": {
          "fields": true
        },
        "mediatype": "application/vnd.api+json"
      },
      "links": {
        "self": "https://hsdkjs.getsandbox.com/v1/resources/accounts-v1-show"
      }
    },
    {
      "id": "accounts-v1-update",
      "type": "resources",
      "attributes": {
        "intent": "update",
        "namespace": "accounts",
        "version": "v1",
        "description": "Update an individual account.",
        "method": "PATCH",
        "href": "https://hsdkjs.getsandbox.com/v1/accounts/{id}",
        "allowed": [
          [
            "data",
            "attributes",
            "age"
          ]
        ],
        "mediatype": "application/vnd.api+json"
      },
      "links": {
        "self": "https://hsdkjs.getsandbox.com/v1/resources/accounts-v1-update"
      }
    }
  ]
}
```


[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/hsdk.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/hsdk.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/hsdk.js.svg?maxAge=2592000&style=flat-square
