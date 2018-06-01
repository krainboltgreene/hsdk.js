import thenP from "@unction/thenp"
import pipe from "@unction/pipe"
import get from "@unction/get"
import mapValues from "@unction/mapvalues"

import resource from "./resource"
import clientTree from "./clientTree"

import type {SDKType} from "types"
import type {HomeType} from "types"
import type {HTTPClientType} from "types"
import type {ReceiveType} from "types"

export default function hsdk ({home, http, receive}: {home: HomeType, http: HTTPClientType, receive: ReceiveType}): Promise<SDKType> {
  return pipe([
    thenP(receive),
    thenP(get("data")),
    thenP(mapValues(resource(http))),
    thenP(clientTree),
  ])(
    http(home),
  )
}
