import {abstract} from "abstraction"
import {text} from "abstraction"
import {hammer} from "ramda-extra"

import request from "./request"

export default abstract({
  name: "resource",
  source: hammer("attributes"),
  schema: {
    id: text,
    intent: text,
    group: text,
    namespace: text,
    verb: text,
    href: text,
    mediatype: text
  },
  virtuals: {
    request
  }
})
