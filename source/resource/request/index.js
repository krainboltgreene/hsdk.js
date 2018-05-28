import urlTemplate from "url-template"
import {omit} from "ramda"

import authenticate from "./authenticate"

import type {RequestMetadataType} from "types"
import type {UnaryFunctionType} from "types"
import type {RequestConfigurationType} from "types"
import type {JSONAPIRootType} from "types"

export default function request (metadata: RequestMetadataType): UnaryFunctionType {
  const {method} = metadata
  const {href} = metadata
  const {mediatype} = metadata
  const {http} = metadata

  return function requestWithMetadata (configuration: RequestConfigurationType = {}): Promise<JSONAPIRootType> {
    const {payload} = configuration
    const {authentication} = configuration
    const url = urlTemplate.parse(href).expand(omit(["authentication", "payload"], configuration))

    if (method === "POST" || method === "PUT" || method === "PATCH") {
      return http({
        url,
        method,
        headers: {
          "Content-Type": mediatype,
          "Accept": mediatype,
          ...authenticate(authentication),
        },
        payload,
      })
    }

    return http({
      url,
      method,
      headers: {
        "Content-Type": mediatype,
        "Accept": mediatype,
        ...authenticate(authentication),
      },
      payload,
    })
  }
}
