import {has} from "ramda"

export default function identify ({authentication}) {
  if (authentication && has("shared", authentication) && has("secret", authentication)) {
    const {shared} = authentication
    const {secret} = authentication

    return {
      Authorization: `Basic ${window.btoa(`${shared}:${secret}`)}`
    }
  }

  return {}
}
