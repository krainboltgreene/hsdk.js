import axios from "axios"
import {prop} from "ramda"
import {groupBy} from "ramda"
import {indexBy} from "ramda"
import {map} from "ramda"

import resources from "./resources"

export default function hsdk ({protocol, host, root}) {
  const provider = `${protocol}://${host}`

  return axios({
    url: `${provider}/${root}`,
    headers: {
      Accept: "application/vnd.api+json"
    },
    responseType: "json"
  })
    .then(prop("data"))
    .then(resources)
    .then(prop("data"))
    .then(groupBy(prop("namespace")))
    .then(map(indexBy(prop("intent"))))
    .then(map(map(prop("request"))))
    .then((client) => (key) => client[key])
    .catch(console.error.bind(console))
}
