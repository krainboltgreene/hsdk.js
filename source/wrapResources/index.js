import {map} from "ramda"
import {type} from "ramda"
import {isNil} from "ramda"
import {isPopulated} from "ramda-extra"

import resource from "./resource"

export default function wrapResources (resources: Array<ResourceType>): Array<ResourceModelType> {
  if (isNil(resources)) {
    throw new Error(`Resources was ${type(resources)} and not an Array`)
  }

  if (isPopulated(resources)) {
    return map(resource, resources)
  }

  throw new Error("hsdk recieved an invalid response payload, check the home network request")
}
