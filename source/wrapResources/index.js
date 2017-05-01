import mapValues from "@unction/mapvalues"
import {type} from "ramda"
import {isNil} from "ramda"
import isPopulated from "@unction/ispopulated"

import resource from "./resource"

export default function wrapResources (resources: Array<ResourceType>): Array<ResourceModelType> {
  if (isNil(resources)) {
    throw new Error(`Resources was ${type(resources)} and not an Array`)
  }

  if (isPopulated(resources)) {
    return mapValues(resource)(resources)
  }

  throw new Error("hsdk recieved an invalid response payload, check the home network request")
}
