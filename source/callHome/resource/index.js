import abstraction from "abstraction"
import {propSatisfies} from "ramda"
import {prop} from "ramda"
import {path} from "ramda"
import isPresent from "@unction/ispresent"
import isPopulated from "@unction/ispopulated"
import isType from "@unction/istype"

import request from "./request"
import resourceAttributes from "./resourceAttributes"

const method = path(["attributes", "method"])
const href = path(["attributes", "href"])
const mediatype = path(["attributes", "mediatype"])

export default abstraction({
  attributes: {
    id: {source: prop("id")},
    type: {source: prop("type")},
    attributes: {
      source: prop("attributes"),
      coerce: resourceAttributes,
    },
    request: {
      source (data: any): Promise<any> {
        return request({
          method: method(data),
          href: href(data),
          mediatype: mediatype(data),
        })
      },
    },
  },
  validations: {
    id: {
      isPresent: propSatisfies(isPresent)("id"),
      isString: propSatisfies(isType("String"))("id"),
      isPopulated: propSatisfies(isPopulated)("id"),
    },
    type: {
      isPresent: propSatisfies(isPresent, "type"),
      isString: propSatisfies(isType("String"), "type"),
      isPopulated: propSatisfies(isPopulated, "type"),
    },
    attributes: {
      isPresent: propSatisfies(isPresent, "attributes"),
      isPopulated: propSatisfies(isPopulated, "attributes"),
    },
  }
})
