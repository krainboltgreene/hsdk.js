import abstraction from "abstraction"
import where from "@unction/where"
import get from "@unction/get"
import isPresent from "@unction/ispresent"
import isPopulated from "@unction/ispopulated"
import isType from "@unction/istype"
import pipe from "@unction/pipe"
import mergeRight from "@unction/mergeright"
import onlyKeys from "@unction/onlykeys"

import request from "./request"

export default function resource (http: HTTPClientType): RequestType {
  return abstraction({
    attributes: {
      id: {source: get("id")},
      type: {source: get("type")},
      attributes: {
        source: get("attributes"),
        coerce: abstraction({
          attributes: {
            intent: {source: get("intent")},
            namespace: {source: get("namespace")},
            version: {source: get("version")},
            description: {source: get("description")},
            method: {source: get("method")},
            href: {source: get("href")},
            mediatype: {source: get("mediatype")},
          },
          validations: {
            intent: {
              isPresent: where({intent: isPresent}),
              isString: where({intent: isType("String")}),
              isPopulated: where({intent: isPopulated}),
            },
            namespace: {
              isPresent: where({namespace: isPresent}),
              isString: where({namespace: isType("String")}),
              isPopulated: where({namespace: isPopulated}),
            },
            version: {
              isPresent: where({version: isPresent}),
              isString: where({version: isType("String")}),
              isPopulated: where({version: isPopulated}),
            },
            description: {
              isPresent: where({description: isPresent}),
              isString: where({description: isType("String")}),
              isPopulated: where({description: isPopulated}),
            },
            method: {
              isPresent: where({method: isPresent}),
              isString: where({method: isType("String")}),
              isPopulated: where({method: isPopulated}),
            },
            href: {
              isPresent: where({href: isPresent}),
              isString: where({href: isType("String")}),
              isPopulated: where({href: isPopulated}),
            },
            mediatype: {
              isPresent: where({mediatype: isPresent}),
              isString: where({mediatype: isType("String")}),
              isPopulated: where({mediatype: isPopulated}),
            },
          },
        }),
      },
      request: {
        source: pipe([
          get("attributes"),
          onlyKeys(["method", "href", "mediatype"]),
          mergeRight({http}),
          request,
        ]),
      },
    },
    validations: {
      id: {
        isPresent: where({id: isPresent}),
        isString: where({id: isType("String")}),
        isPopulated: where({id: isPopulated}),
      },
      type: {
        isPresent: where({type: isPresent}),
        isString: where({type: isType("String")}),
        isPopulated: where({type: isPopulated}),
      },
      attributes: {
        isPresent: where({attributes: isPresent}),
        isPopulated: where({attributes: isPopulated}),
      },
    },
  })
}
