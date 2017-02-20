import {describe, it} from "mocha"
import {expect} from "chai"

import subject from "./"

describe("hsdk()", () => {
  context(".request", () => {
    const sdk = subject({
      home: "http://example.com",
      mocks: [
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
      ],
    })

    it("returns a function", () => {
      return sdk.then((client) => expect(client.request).to.be.an.instanceOf(Function))
    })
  })
})
