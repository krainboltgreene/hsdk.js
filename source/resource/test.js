import resource from "./"

test("resouce", () => {
  expect(resource(() => false)({
    id: "show-v1-accounts",
    type: "resources",
    attributes: {
      intent: "show",
      method: "GET",
      version: "v1",
      namespace: "accounts",
      description: "test",
      href: "https://api.example.com/v1/accounts",
      allowed: [],
      mediatype: "application/vnd.api+json",
    },
  })).toMatchObject({
    id: "show-v1-accounts",
    type: "resources",
    attributes: {
      intent: "show",
      method: "GET",
      version: "v1",
      namespace: "accounts",
      description: "test",
      href: "https://api.example.com/v1/accounts",
      allowed: [],
      mediatype: "application/vnd.api+json",
    },
  })
})
