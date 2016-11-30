import {ok} from "httpstatuses"

export default function handleResponse ({status, statusText, data}) {
  if (status === ok) {
    return data
  }

  throw new Error(`hsdk couldn't access the home location, we received the response ${status} ${statusText}`)
}
