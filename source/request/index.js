import axois from "axios"
import urlTemplate from "url-template"
import {omit} from "ramda"

import identify from "./identify"

export default function request ({method, href, mediatype}: RequestMetadataType): Function {
  return (configuration: RequestConfigurationType): Promise<Object> => {
    const {payload = {}} = configuration
    const {authentication} = configuration
    const url = urlTemplate.parse(href).expand(omit(["authentication", "payload"], configuration))
    const identity = authentication ? identify(authentication) : {}
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
