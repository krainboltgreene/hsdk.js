import basic from "./basic"
import bearer from "./bearer"

export default function authenticate (schema: AuthenticationType): AuthorizationHeaderType | {} | void {
  switch (true) {
    case schema && schema.scheme === "basic": {
      return basic(schema)
    }
    case schema && schema.scheme === "bearer": {
      return bearer(schema)
    }
    default: {
      return {}
    }
  }
}
