import fetchPolyfill from "fetch-ponyfill"
import urlTemplate from "url-template"
import {isNil} from "ramda"
import {always} from "ramda"
import {ifElse} from "ramda"
import {omit} from "ramda"

const {fetch} = fetchPolyfill()

const authorize = ({key, secret}) => ({Authorization: `Basic ${window.btoa(`${key}:${secret}`)}`})
const authorization = ifElse(isNil, always({}), authorize)
const body = ifElse(isNil, always(null), JSON.stringify)

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
      return fetch(url, {...data, body: body(payload)})
    }

    return fetch(url, data)
  }
}
