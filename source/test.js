/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import subject from "./"

const mocks = [
  {
    id: "1",
    attributes: {
      intent: "list",
      version: "v1",
      namespace: "accounts",
      verb: "GET",
      href: "https://example.com/v1/accounts/{id}",
      mediatype: "application/json",
    },
  },
]

test(({type, end}) => {
  type(subject, "function")
  end()
})
test(({type, end}) => {
  type(subject({
    home: "",
    mocks,
  }), "Promise")
  end()
})
test(({type}) => {
  return subject({
    home: "",
    mocks
  })
    .then((client) => type(client, "object"))
})
