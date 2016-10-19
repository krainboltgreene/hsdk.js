import hsdk from "../transpiled/source"

const SDK = hsdk({
  protocol: "http",
  host: "hsdkjs.getsandbox.com",
  root: "v1/resources"
})

Promise.all([
  SDK
    .then((client) => client().v1Accounts().list())
    .then((response) => response.json())
    .then((value) => console.log({message: "List", value})),

  SDK
    .then((client) => client().v1Accounts().show({id: "1"}))
    .then((response) => response.json())
    .then((value) => console.log({message: "Show", value})),

  SDK
    .then((client) => {
      return client
        .v1Accounts
        .update({
          id: "1",
          body: JSON.stringify({
            data: {
              id: "1",
              type: "accounts",
              attributes: {
                age: 29
              }
            }
          })
        })
    })
    .then((response) => response.json())
    .then((value) => console.log({message: "Update", value}))
])
