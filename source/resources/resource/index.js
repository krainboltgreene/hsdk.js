import {abstract} from "abstraction"
import {text} from "abstraction"
import {hammer} from "ramda-extra"

import request from "./request"

export default abstract({
  name: "resource",
  source: hammer("attributes"),
  schema: {
    id: text,
    name: text,
    group: text,
    description: text,
    verb: text,
    href: text,
    mediatype: text
  },
  virtuals: {
    request
  }
})
