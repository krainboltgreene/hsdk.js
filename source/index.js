import axios from "axios"
import {prop} from "ramda"

import wrapResources from "./wrapResources"
import treeify from "./treeify"

export default function hsdk ({protocol, host, root}) {
  return axios({
    url: `${protocol}://${host}/${root}`,
    headers: {
      Accept: "application/vnd.api+json"
    },
    responseType: "json"
  })
    .then(prop("data"))
    .then(wrapResources)
    .then(treeify)
}
