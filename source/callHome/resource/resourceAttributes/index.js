import abstraction from "abstraction"
import {prop} from "ramda"
import {propSatisfies} from "ramda"
import isPresent from "@unction/ispresent"
import isPopulated from "@unction/ispopulated"
import isType from "@unction/istype"

export default abstraction({
  attributes: {
    intent: {source: prop("intent")},
    namespace: {source: prop("namespace")},
    version: {source: prop("version")},
    description: {source: prop("description")},
    method: {source: prop("method")},
    href: {source: prop("href")},
    allowed: {source: prop("allowed")},
    mediatype: {source: prop("mediatype")},
  },
  validations: {
    intent: {
      isPresent: propSatisfies(isPresent, "intent"),
      isString: propSatisfies(isType("String"), "intent"),
      isPopulated: propSatisfies(isPopulated, "intent"),
    },
    namespace: {
      isPresent: propSatisfies(isPresent, "namespace"),
      isString: propSatisfies(isType("String"), "namespace"),
      isPopulated: propSatisfies(isPopulated, "namespace"),
    },
    version: {
      isPresent: propSatisfies(isPresent, "version"),
      isString: propSatisfies(isType("String"), "version"),
      isPopulated: propSatisfies(isPopulated, "version"),
    },
    description: {
      isPresent: propSatisfies(isPresent, "description"),
      isString: propSatisfies(isType("String"), "description"),
      isPopulated: propSatisfies(isPopulated, "description"),
    },
    method: {
      isPresent: propSatisfies(isPresent, "method"),
      isString: propSatisfies(isType("String"), "method"),
      isPopulated: propSatisfies(isPopulated, "method"),
    },
    href: {
      isPresent: propSatisfies(isPresent, "href"),
      isString: propSatisfies(isType("String"), "href"),
      isPopulated: propSatisfies(isPopulated, "href"),
    },
    allowed: {
      isPresent: propSatisfies(isPresent, "allowed"),
      isArray: propSatisfies(isType("Array"), "allowed"),
    },
    mediatype: {
      isPresent: propSatisfies(isPresent, "mediatype"),
      isString: propSatisfies(isType("String"), "mediatype"),
      isPopulated: propSatisfies(isPopulated, "mediatype"),
    },
  },
})
