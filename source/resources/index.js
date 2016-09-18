import {map} from "ramda"
import {abstract} from "abstraction"

import resource from "./resource"

export default abstract({
  name: "resources",
  schema: {
    data: map(resource)
  }
})
