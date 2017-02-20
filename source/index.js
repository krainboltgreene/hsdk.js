import axios from "axios"
import callHome from "./callHome"

export default function hsdk ({home, mocks = false}) {
  if (mocks) {
    return callHome(Promise.resolve({data: {data: mocks}}))
  }

  return callHome(axios({
    url: home,
    headers: {Accept: "application/vnd.api+json"},
    responseType: "json",
  }))
}
