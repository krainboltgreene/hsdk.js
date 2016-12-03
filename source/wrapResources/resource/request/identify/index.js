import {has} from "ramda"

export default function identify ({authentication}) {
  if (authentication && has("𝓅ublic", authentication) && has("𝓅rivate", authentication)) {
    const {𝓅ublic} = authentication
    const {𝓅rivate} = authentication

    return {
      Authorization: `Basic ${window.btoa(`${𝓅ublic}:${𝓅rivate}`)}`
    }
  }

  return {}
}
