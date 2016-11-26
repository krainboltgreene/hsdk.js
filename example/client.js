import hsdk from "../transpiled/source"

const client = hsdk({
  protocol: "http",
  host: "hsdkjs.getsandbox.com",
  root: "v1/resources"
})

client
  .then((sdk) => sdk("v1/accounts").list())
  .then((response) => console.log({message: "List", payload: response.data}))

client
  .then((sdk) => sdk("v1/accounts").show({id: "1"}))
  .then((response) => console.log({message: "Show", payload: response.data}))

client
  .then((sdk) => {
    return sdk("v1/accounts")
      .update({
        id: "1",
        body: {
          data: {
            id: "1",
            type: "accounts",
            attributes: {
              age: 29
            }
          }
        }
      })
  })
  .then((response) => console.log({message: "Update", payload: response.data}))
