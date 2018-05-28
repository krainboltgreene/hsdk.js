import btoa from "btoa"
import type {BearerAuthenticationType} from "types"
import type {AuthorizationHeaderType} from "types"

export default function basic (authentication: BearerAuthenticationType): AuthorizationHeaderType {
  const {secret} = authentication

  return {Authorization: `Bearer ${btoa(secret)}`}
}
