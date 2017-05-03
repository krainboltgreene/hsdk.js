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
    {},
    mocks,
  ), "Promise")

  end()
})

test("Returned promise resolution must be an object", ({type}) => {
  return subject(
    {},
    mocks,
  )
    .then((client) => type(client, "object"))
})

test("Returned promise resolution object must have a function for the action", ({type}) => {
  return subject(
    {},
    mocks,
  )
    .then((client) => type(client.accounts.v1.show, "function"))
})

test("With a real show endpoint", ({type}) => {
  return subject({url: "https://hsdkjs.getsandbox.com/v1/resources"})
    .then((client) => client.accounts.v1.list())
    .then((response) => type(response, "object"))
})

test("With a real show endpoint", ({type}) => {
  return subject({url: "https://hsdkjs.getsandbox.com/v1/resources"})
    .then((client) => client.accounts.v1.show({id: "1"}))
    .then((response) => type(response, "object"))
})

test("With a real update endpoint", ({type}) => {
  return subject({url: "https://hsdkjs.getsandbox.com/v1/resources"})
    .then((client) => client.accounts.v1.update({
      id: "1",
      payload: {
        data: {
          id: "1",
          type: "accounts",
          attributes: {age: 29}
        }
      }
    }))
    .then((response) => type(response, "object"))
})
