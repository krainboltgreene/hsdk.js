import {path} from "ramda"
import {prop} from "ramda"
import {groupBy} from "ramda"
import {indexBy} from "ramda"
import treeify from "@unction/treeify"
import mapValues from "@unction/mapvalues"

import resource from "./resource"

const tree = treeify([
  groupBy(path(["attributes", "namespace"])),
  groupBy(path(["attributes", "version"])),
  indexBy(path(["attributes", "intent"])),
  prop("request"),
])

export default function callHome (client: Promise<ResponseType | MockType>): Promise<SDKType> {
  return client
    .then(path(["data", "data"]))
    .then(mapValues(resource))
    .then(tree)
}
