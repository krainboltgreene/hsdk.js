/* eslint-disable no-console */
import {path} from "ramda"
import {merge} from "ramda"
import {prop} from "ramda"
import {groupBy} from "ramda"
import {indexBy} from "ramda"
import {treeify} from "ramda-extra"

import wrapResources from "../wrapResources"
import request from "../request"

export default function callHome (client: Promise<ResponseType | MockType>): Promise<any> {
  return client
    .then(path(["data", "data"]))
    .then(wrapResources)
    .then(treeify([
      groupBy(prop("namespace")),
      groupBy(prop("version")),
      indexBy(prop("intent")),
    ]))
    .then(merge({request}))
}
