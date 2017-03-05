import {map} from "ramda"
import {isPopulated} from "ramda-extra"

import resource from "./resource"

type ResourceType = {
  id: string,
  attributes: {
    intent: string,
    version: string,
    namespace: string,
    verb: string,
    href: string,
    mediatype: string,
  },
}

type ResourceModelType = {
  id: string,
  intent: string,
  version: string,
  namespace: string,
  verb: string,
  href: string,
  mediatype: string,
  request: Function,
}

export default function wrapResources (resources: Array<ResourceType>): Array<ResourceModelType> {
  if (isPopulated(resources)) {
    return map(resource, resources)
  }

  throw new Error("hsdk recieved an invalid response payload, check the home network request")
}
