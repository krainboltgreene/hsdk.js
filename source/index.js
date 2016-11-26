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
    .then(groupBy(prop("group")))
    .then(map(indexBy(prop("name"))))
    .then(map(map(prop("request"))))
}
