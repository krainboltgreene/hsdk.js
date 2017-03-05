/* eslint-disable no-console */
import {path} from "ramda"
import {merge} from "ramda"

import wrapResources from "../wrapResources"
import treeify from "../treeify"
import request from "../request"

type AxoisResponseType = {
  data: Object | null,
}

export default function callHome (client: Promise<AxoisResponseType>): Promise<Object> {
  return client
    .then(path(["data", "data"]))
    .then(wrapResources)
    .then(treeify)
    .then(merge({request}))
}
