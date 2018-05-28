import resolveP from "@unction/resolvep"
import request from "./"

test("request merges configurations", () => {
  expect.assertions(1)

  request({
    method: "GET",
    href: "http://api.example.com",
    mediatype: "application/json",
    http: (configuration) => resolveP(configuration),
  })({
    payload: {},
    authentication: {},
  })
    .then((configuration) =>
      expect(configuration).toEqual({
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
        payload: {},
        url: "http://api.example.com",
      })
    )
})
