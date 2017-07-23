import axois from "axios"
import urlTemplate from "url-template"
import {omit} from "ramda"

import * as authenticate from "./authenticate"

export default function request ({method, href, mediatype}: RequestMetadataType): Function {
  return function requestWithMetadata (configuration: RequestConfigurationType = {}): Promise<JSONAPIRootType> {
    const {payload} = configuration
    const {authentication} = configuration
    const url = urlTemplate.parse(href).expand(omit(["authentication", "payload"], configuration))
    const identity = authentication ? authenticate[authentication.scheme](authentication) : {}
    const properties = {
      method,
      headers: {
        "Content-Type": mediatype,
        "Accept": mediatype,
        ...identity,
      },
    }

    if (method === "POST" || method === "PUT" || method === "PATCH") {
      return axois({
        url,
        ...properties,
        data: payload,
      })
    }

    return axois({
      url,
      ...properties,
      params: payload,
    })
  }
}
