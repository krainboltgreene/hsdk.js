import axios from "axios"
import callHome from "./callHome"

export default function hsdk (home: HomeType, mocks?: MockType): Promise<SDKType> {
  if (mocks) {
    return callHome(Promise.resolve(mocks))
  }

  return callHome(axios(home))
}
