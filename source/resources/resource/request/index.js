import axois from "axios"
import urlTemplate from "url-template"
import {isNil} from "ramda"
import {always} from "ramda"
import {ifElse} from "ramda"
import {omit} from "ramda"
import {identity} from "ramda"

const authorize = ({key, secret}) => ({Authorization: `Basic ${window.btoa(`${key}:${secret}`)}`})
const authorization = ifElse(isNil, always({}), authorize)
const body = ifElse(isNil, always(null), identity)

export default function request ({method, href, mediatype}) {
  return (configuration = {}) => {
    const {authentication = {}} = configuration
    const {payload = null} = configuration
    const url = urlTemplate.parse(href).expand(omit(["authentication", "payload"], configuration))
    const headers = {
      "Content-Type": mediatype,
      "Accept": mediatype,
      ...authorization(authentication)
    }
    const data = {
      method,
      headers
    }

    if (method === "POST" || method === "PATCH") {
      return axois({
        url,
        ...properties,
        data: payload
      })
    }

    return axois({
      url,
      ...properties,
      params: payload
    })
  }
}
