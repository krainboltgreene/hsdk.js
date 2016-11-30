import axios from "axios"

import wrapResources from "./wrapResources"
import handleResponse from "./handleResponse"
import treeify from "./treeify"

export default function hsdk ({protocol, host, root}) {
  return axios({
    url: `${protocol}://${host}/${root}`,
    headers: {
      Accept: "application/vnd.api+json"
    },
    responseType: "json"
  })
    .then(handleResponse)
    .then(wrapResources)
    .then(treeify)
    .then((client) => (key) => client[key])
}
