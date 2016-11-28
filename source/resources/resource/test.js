import {describe, it} from "mocha"
import {expect} from "chai"

import subject from "./"

describe("resource()", () => {
  const data = {
    id: "1",
    attributes: {
      intent: "list",
      namespace: "v1/accounts",
      verb: "GET",
      href: "https://example.com/v1/accounts/{id}",
      mediatype: "application/json"
    }
  }

  it("has a request property", () => {
    expect(subject(data)).to.have.property("request")
  })

  context(".property", () => {
    const {request} = subject(data)

    it("returns a function", () => {
      expect(request).to.be.an.instanceOf(Function)
    })
  })
})
