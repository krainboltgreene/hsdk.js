import btoa from "btoa"
import type {BasicAuthenticationType} from "types"
import type {AuthorizationHeaderType} from "types"

export default function basic (authentication: BasicAuthenticationType): AuthorizationHeaderType {
  const {shared} = authentication
  const {secret} = authentication

  return {Authorization: `Basic ${btoa(`${shared}:${secret}`)}`}
}
