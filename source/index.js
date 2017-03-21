import axios from "axios"
import callHome from "./callHome"

export default function hsdk ({home, mocks}: {home: string, mocks?: Array<ResourceType>}): Promise<Object> {
  const response = mocks ? Promise.resolve({data: {data: mocks}}) : axios({
    url: home,
    headers: {Accept: "application/vnd.api+json"},
    responseType: "json",
  })

  return callHome(response)
}
