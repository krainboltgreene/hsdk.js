import {abstract} from "abstraction"
import {text} from "abstraction"
import {propSatisfies} from "ramda"
import {hammer} from "ramda-extra"
import isPresent from "@unction/ispresent"

import request from "../../request"

export default abstract({
  name: "resource",
  source: hammer("attributes"),
  schema: {
    id: text,
    intent: text,
    namespace: text,
    version: text,
    verb: text,
    href: text,
    mediatype: text,
  },
  virtuals: {request},
  validations: {
    idPresent: propSatisfies(isPresent, "id"),
    intentPresent: propSatisfies(isPresent, "intent"),
    namespacePresent: propSatisfies(isPresent, "namespace"),
    versionPresent: propSatisfies(isPresent, "version"),
    verbPresent: propSatisfies(isPresent, "verb"),
    hrefPresent: propSatisfies(isPresent, "href"),
    mediatypePresent: propSatisfies(isPresent, "mediatype"),
  },
})
