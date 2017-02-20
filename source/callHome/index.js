import {prop} from "ramda"
import {merge} from "ramda"

import wrapResources from "../wrapResources"
import treeify from "../treeify"
import request from "../request"

export default function callHome (client) {
  return client
    .then(prop("data"))
    .then(wrapResources)
    .then(treeify)
    .then(merge({request}))
}
