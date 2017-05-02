/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import subject from "./"

const mocks = {
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
          description: "test",
          allowed: [],
          href: "https://example.com/v1/accounts/{id}",
          mediatype: "application/vnd.api+json",
        },
      },
    ]
  }
}

test("Must be a function", ({type, end}) => {
  type(subject, "function")

  end()
})

test("Must return a promise", ({type, end}) => {
  type(subject(
    "",
    mocks,
  ), "Promise")

  end()
})

test("Returned promise resolution must be an object", ({type}) => {
  return subject(
    "",
    mocks,
  )
    .then((client) => type(client, "object"))
})

test("Returned promise resolution object must have a function for the action", ({type}) => {
  return subject(
    "",
    mocks,
  )
    .then((client) => type(client.accounts.v1.show, "function"))
})
