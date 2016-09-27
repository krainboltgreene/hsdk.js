import hsdk from "../transpiled/source"

hsdk({
  protocol: "http",
  host: "hsdkjs.getsandbox.com",
  root: "v1/resources"
})
  .then((client) => {
    return client
      .accounts
      .list()
  })
  .then((response) => response.json())
  .then((value) => console.log(value))
