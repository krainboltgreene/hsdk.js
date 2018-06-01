import resolveP from "@unction/resolvep"
import hsdk from "./"

const resourcesIndexBody = {
  data: [
    {
      id: "accounts-v1-show",
      type: "resources",
      attributes: {
        intent: "show",
        version: "v1",
        namespace: "accounts",
        method: "GET",
        description: "A test",
        href: "https://api.example.com/v1/accounts/{id}",
        mediatype: "application/vnd.api+json",
      },
    },
    {
      id: "accounts-v1-delete",
      type: "resources",
      attributes: {
        intent: "delete",
        version: "v1",
        namespace: "accounts",
        method: "DELETE",
        description: "Test two",
        href: "https://api.example.com/v1/accounts/{id}",
        mediatype: "application/vnd.api+json",
      },
    },
  ],
}
const accountsShowBody = {
  data: {
    id: "1",
    type: "accounts",
    attributes: {
      name: "Kurtis Rainbolt-Greene",
      age: 24,
    },
  },
}

const http = ({url}) => {
  if (url === "https://api.example.com/v1/resources") {
    return resolveP(resourcesIndexBody)
  }

  if (url === "https://api.example.com/v1/accounts/1") {
    return resolveP(accountsShowBody)
  }
}
const subject = hsdk({
  home: {url: "https://api.example.com/v1/resources"},
  http,
  receive: (response) => response,
})

test("hsdk be a function", () => expect(typeof hsdk).toBe("function"))
test("hsdk() return a promise", () => expect(subject.constructor).toBe(Promise))
test("client must be an object", () => {
  expect.assertions(1)
  subject
    .then((client) => expect(typeof client).toBe("object"))
    .catch((error) => console.error(error))
})
test("show property must be an function", () => {
  expect.assertions(1)
  subject
    .then((client) => expect(typeof client.accounts.v1.show).toBe("function"))
    .catch((error) => console.error(error))
})
test("delete property must be an function", () => {
  expect.assertions(1)
  subject
    .then((client) => expect(typeof client.accounts.v1.delete).toBe("function"))
    .catch((error) => console.error(error))
})
test("show function returns a promise with a response", () => {
  expect(
    subject.then((client) => client.accounts.v1.show({id: "1"}))
  )
    .resolves.toEqual(accountsShowBody)
})
test("delete function returns a promise with a response", () => {
  expect(
    subject.then((client) => client.accounts.v1.delete({id: "1"}))
  )
    .resolves.toEqual(accountsShowBody)
})
