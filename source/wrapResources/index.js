import {map} from "ramda"
import {isPopulated} from "ramda-extra"

import resource from "./resource"

export default function wrapResources ({data}) {
  if (data && isPopulated(data)) {
    return map(resource, data)
  }

  throw new Error("hsdk recieved an invalid response payload, check the home network request")
}
