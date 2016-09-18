import hsdk from "../transpiled/source"

hsdk({
  protocol: "http",
  host: "localhost:8080",
  root: "v1/resources"
})
  .then((client) => {
    return client
      .accounts
      .list()
  })
  .then((response) => response.json())
  .then((value) => console.log(value))
