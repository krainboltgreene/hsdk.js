import {path} from "ramda"
import {merge} from "ramda"
import {prop} from "ramda"
import {groupBy} from "ramda"
import {indexBy} from "ramda"
import treeify from "@unction/treeify"

import wrapResources from "../wrapResources"
import request from "./request"

const tree = treeify([
  groupBy(prop("namespace")),
  groupBy(prop("version")),
  indexBy(prop("intent")),
  prop("request"),
])

export default function callHome (client: Promise<ResponseType | MockType>): Promise<SDKType> {
  return client
    .then(path(["data", "data"]))
    .then(wrapResources)
    .then(tree)
    .then(merge({request}))
}
