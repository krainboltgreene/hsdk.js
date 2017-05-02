/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import {path} from "ramda"

import callHome from "./"

const mock = Promise
  .resolve({
    data: {
      data: [
        {
          id: "1",
          type: "resources",
          attributes: {
            intent: "show",
            version: "v1",
            namespace: "accounts",
            method: "GET",
            description: "A test",
            allowed: [],
            href: "https://example.com/v1/accounts/{id}",
            mediatype: "application/vnd.api+json",
          },
        },
      ]
    }
  })

test(({type}) => {
  return callHome(mock)
    .then((body) => {
      return type(
        path(["accounts", "v1", "show"], body),
        "function"
      )
    })
})
