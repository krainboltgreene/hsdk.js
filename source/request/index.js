import axois from "axios"
import urlTemplate from "url-template"
import {omit} from "ramda"

import identify from "./identify"

export default function request ({method, href, mediatype}) {
  return (configuration = {}) => {
    const {payload = null} = configuration
    const url = urlTemplate.parse(href).expand(omit(["authentication", "payload"], configuration))
    const properties = {
      method,
      headers: {
        "Content-Type": mediatype,
        "Accept": mediatype,
        ...identify(configuration),
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
