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

// test("hsdk be a function", () => expect(typeof subject).toBe("function"))
// test("hsdk return a promise", () => expect(subject({home: {}, http: () => resolveP(body), receive: key("data")}).constructor).toBe(Promise))
// test("client must be an function", () => {
//   expect.assertions(1)
//   subject({home: {}, http: () => resolveP(body), receive: key("data")}).then((client) => expect(typeof client).toBe("function"))
// })
// test("client must be an function", () => {
//   expect.assertions(1)
//   subject({home: {}, http: () => resolveP(body), receive: key("data")}).then((client) => expect(typeof client.accounts.v1.show).toBe("function"))
// })

test("it works", () => {
  expect.assertions(1)
  hsdk({
    home: {url: "https://api.example.com/v1/resources"},
    http,
    receive: (response) => response,
  })
    .then((client) => {
      expect(client.accounts.v1.show({id: "1"}))
        .toEqual(accountsShowBody)
    })
})
