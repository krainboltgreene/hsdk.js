import fetchPolyfill from "fetch-ponyfill"
import {prop} from "ramda"
import {groupBy} from "ramda"
import {indexBy} from "ramda"
import {map} from "ramda"

import resources from "./resources"

const {fetch} = fetchPolyfill()

export default function hsdk ({protocol, host, root}) {
  const provider = `${protocol}://${host}`

  return fetch(
    `${provider}/${root}`,
    {headers: {Accept: "application/vnd.api+json"}}
  )
    .then((response) => response.json())
    .then(resources)
    .then(prop("data"))
    .then(groupBy(prop("group")))
    .then(map(indexBy(prop("name"))))
    .then(map(map(prop("request"))))
}
