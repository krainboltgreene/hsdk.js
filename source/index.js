import axios from "axios"
import resolveP from "@unction/resolvep"
import callHome from "./callHome"

export default function hsdk (home: HomeType, mocks?: MockType): Promise<SDKType> {
  if (mocks) {
    return callHome(resolveP(mocks))
  }

  return callHome(axios(home))
}
